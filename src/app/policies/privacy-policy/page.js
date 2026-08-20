import PolicyLayout from "@/components/PolicyLayout";

export const metadata = { title: "Privacy Policy | Slatch Pharmaceuticals" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="August 2026">
      <p>
        Slatch Pharmaceuticals (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
        privacy. This policy explains what information we collect when you use
        this website and how we use it.
      </p>
      <div>
        <h2 className="font-semibold text-gray-900">Information We Collect</h2>
        <p className="mt-2">
          When you place an order or contact us, we may collect your name, phone
          number, email address, and delivery address. When you browse the site, we
          may collect basic usage information such as pages viewed.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">How We Use Your Information</h2>
        <p className="mt-2">
          We use this information to process and deliver your orders, respond to
          your enquiries, and improve our website and product range.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">Sharing of Information</h2>
        <p className="mt-2">
          We do not sell your personal information. We may share order details with
          delivery partners solely to fulfil your order.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">Contact</h2>
        <p className="mt-2">
          For any questions about this policy, contact us at
          support@slatchpharma.com.
        </p>
      </div>
    </PolicyLayout>
  );
}
