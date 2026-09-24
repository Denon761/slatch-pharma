import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/data";
import { sendOrderEmails } from "@/lib/mailer";

const SHIPPING_FEE = 200;

export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { customer, items } = body;

  if (!customer?.fullName || !customer?.email || !customer?.phone || !customer?.address || !customer?.city) {
    return NextResponse.json({ error: "Missing required customer details." }, { status: 400 });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
  }

  const resolvedItems = [];
  for (const line of items) {
    const product = getProductBySlug(line.slug);
    const qty = Number(line.qty);
    if (!product || !Number.isFinite(qty) || qty <= 0) {
      return NextResponse.json({ error: "Invalid item in cart." }, { status: 400 });
    }
    resolvedItems.push({
      slug: product.slug,
      name: product.name,
      qd: product.qd,
      price: product.price,
      qty,
    });
  }

  const subtotal = resolvedItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = SHIPPING_FEE;
  const total = subtotal + shipping;
  const orderId = `SP-${Date.now().toString().slice(-8)}`;

  const order = {
    orderId,
    items: resolvedItems,
    subtotal,
    shipping,
    total,
    customer: {
      fullName: customer.fullName,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      city: customer.city,
      notes: customer.notes || "",
    },
  };

  try {
    await sendOrderEmails(order);
  } catch (err) {
    console.error("Failed to send order emails", err);
    return NextResponse.json(
      { error: "Order could not be confirmed right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ orderId });
}
