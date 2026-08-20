import PolicyLayout from "@/components/PolicyLayout";

export const metadata = { title: "Shipping & Returns | Slatch Pharmaceuticals" };

export default function ShippingReturnsPage() {
  return (
    <PolicyLayout title="Shipping & Returns" updated="August 2026">
      <div>
        <h2 className="font-semibold text-gray-900">Delivery</h2>
        <p className="mt-2">
          Orders are typically delivered within 3-5 business days across Pakistan.
          Delivery times may vary depending on your location.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">Payment on Delivery</h2>
        <p className="mt-2">
          We currently accept Cash on Delivery for all online orders. Please have
          the exact amount ready for our delivery partner where possible.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">Returns</h2>
        <p className="mt-2">
          If you receive a damaged or incorrect item, please contact us within 3
          days of delivery at support@slatchpharma.com with your order details, and
          we will arrange a replacement or refund.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">Opened Products</h2>
        <p className="mt-2">
          For hygiene and safety reasons, opened or used products cannot be
          returned unless found to be defective.
        </p>
      </div>
    </PolicyLayout>
  );
}
