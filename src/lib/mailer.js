import nodemailer from "nodemailer";
import { formatPKR } from "@/lib/data";

let transporter;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[c]);
}

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

function itemsTableRows(items) {
  return items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #eee;">${item.name} (${item.qd})</td>
          <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:center;">${item.qty}</td>
          <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right;">${formatPKR(item.price * item.qty)}</td>
        </tr>`
    )
    .join("");
}

function orderSummaryHtml(order) {
  return `
    <table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
      <thead>
        <tr>
          <th style="text-align:left;padding-bottom:8px;border-bottom:2px solid #245a3a;">Item</th>
          <th style="text-align:center;padding-bottom:8px;border-bottom:2px solid #245a3a;">Qty</th>
          <th style="text-align:right;padding-bottom:8px;border-bottom:2px solid #245a3a;">Total</th>
        </tr>
      </thead>
      <tbody>${itemsTableRows(order.items)}</tbody>
    </table>
    <table style="width:100%;margin-top:12px;font-family:Arial,sans-serif;font-size:14px;">
      <tr>
        <td style="padding:4px 0;">Subtotal</td>
        <td style="padding:4px 0;text-align:right;">${formatPKR(order.subtotal)}</td>
      </tr>
      <tr>
        <td style="padding:4px 0;">Shipping</td>
        <td style="padding:4px 0;text-align:right;">${formatPKR(order.shipping)}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;font-weight:bold;border-top:1px solid #ccc;">Total</td>
        <td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px solid #ccc;">${formatPKR(order.total)}</td>
      </tr>
    </table>`;
}

export async function sendOrderEmails(order) {
  const mailer = getTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const admin = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

  await mailer.sendMail({
    from,
    to: order.customer.email,
    subject: `Thank you for your order #${order.orderId} – Slatch Pharmaceuticals`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#1a2e22;max-width:560px;margin:0 auto;">
        <h2 style="color:#245a3a;">Thank you for your order, ${escapeHtml(order.customer.fullName)}!</h2>
        <p>We've received your order <strong>#${order.orderId}</strong> and it's being prepared for delivery.</p>
        ${orderSummaryHtml(order)}
        <h3 style="color:#245a3a;margin-top:24px;">Delivery Details</h3>
        <p>
          ${escapeHtml(order.customer.address)}<br />
          ${escapeHtml(order.customer.city)}<br />
          Phone: ${escapeHtml(order.customer.phone)}
        </p>
        <p style="margin-top:24px;">Payment Method: Cash on Delivery</p>
        <p style="margin-top:32px;font-size:12px;color:#666;">
          If you have any questions about your order, just reply to this email.
        </p>
      </div>`,
  });

  await mailer.sendMail({
    from,
    to: admin,
    subject: `New Order #${order.orderId} – ${formatPKR(order.total)}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#1a2e22;max-width:560px;margin:0 auto;">
        <h2 style="color:#245a3a;">New order received</h2>
        <p><strong>Order:</strong> #${order.orderId}</p>
        <h3 style="color:#245a3a;">Customer</h3>
        <p>
          ${escapeHtml(order.customer.fullName)}<br />
          ${escapeHtml(order.customer.email)}<br />
          ${escapeHtml(order.customer.phone)}<br />
          ${escapeHtml(order.customer.address)}, ${escapeHtml(order.customer.city)}
        </p>
        ${order.customer.notes ? `<p><strong>Notes:</strong> ${escapeHtml(order.customer.notes)}</p>` : ""}
        ${orderSummaryHtml(order)}
      </div>`,
  });
}
