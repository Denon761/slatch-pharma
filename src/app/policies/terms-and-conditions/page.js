import PolicyLayout from "@/components/PolicyLayout";

export const metadata = { title: "Terms & Conditions | Slatch Pharmaceuticals" };

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions" updated="August 2026">
      <p>
        By using this website and placing an order with Slatch Pharmaceuticals, you
        agree to the following terms.
      </p>
      <div>
        <h2 className="font-semibold text-gray-900">Product Information</h2>
        <p className="mt-2">
          Product descriptions on this site reflect traditional herbal use and are
          provided for general information only. They are not medical claims and do
          not replace advice from a qualified physician.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">Orders & Pricing</h2>
        <p className="mt-2">
          All prices are listed in Pakistani Rupees (PKR) and are subject to change
          without notice. We reserve the right to refuse or cancel any order at our
          discretion.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">Use of Website</h2>
        <p className="mt-2">
          You agree to use this website only for lawful purposes and not to misuse
          any content, images, or product information published here.
        </p>
      </div>
    </PolicyLayout>
  );
}
