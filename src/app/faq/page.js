const FAQS = [
  {
    q: "How do I find the right medicine for my condition?",
    a: "Use the \"Search by Disease\" box on the homepage, or browse Health Conditions to find medicines traditionally used for your symptoms.",
  },
  {
    q: "What does the QD code mean?",
    a: "Every Slatch Pharmaceuticals product has a unique QD code printed on its packaging. You can search directly by this code to find the exact product.",
  },
  {
    q: "Are your medicines available in stores?",
    a: "Yes. Slatch Pharmaceuticals products are available through medical stores across Pakistan, in addition to ordering online through this website.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders are typically delivered within 3-5 business days, depending on your location.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We currently accept Cash on Delivery for all online orders.",
  },
  {
    q: "Can I return a product?",
    a: "Please see our Shipping & Returns policy for details on returns and exchanges.",
  },
];

export const metadata = {
  title: "FAQ | Slatch Pharmaceuticals",
};

export default function FAQPage() {
  return (
    <div className="container-page py-14 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
      <div className="mt-8 divide-y divide-gray-100 border-y border-gray-100">
        {FAQS.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
              {item.q}
              <span className="text-brand-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
