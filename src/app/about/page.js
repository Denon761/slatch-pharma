import { Leaf, ShieldCheck, Users, Award } from "lucide-react";

export const metadata = {
  title: "About Us | Slatch Pharmaceuticals",
  description: "Learn about Slatch Pharmaceuticals, Pakistan's trusted herbal medicine brand.",
};

const VALUES = [
  {
    icon: Leaf,
    title: "Rooted in Tradition",
    text: "Every formulation draws on decades of Unani and herbal medicine knowledge passed down through generations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    text: "Our products are prepared under strict quality controls, using carefully sourced herbal ingredients.",
  },
  {
    icon: Users,
    title: "For Every Family",
    text: "From digestive health to fertility care, our range is built to support every member of the family.",
  },
  {
    icon: Award,
    title: "40+ Years of Service",
    text: "Trusted by pharmacies and families across Pakistan for more than four decades.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-brand-50">
        <div className="container-page py-14 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">About Slatch Pharmaceuticals</h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            For more than 40 years, Slatch Pharmaceuticals has been formulating trusted
            herbal medicines for families across Pakistan, combining traditional
            knowledge with consistent, quality-controlled production.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <v.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{v.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-2xl bg-brand-900 text-white p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-brand-100">
              To make trusted, traditional herbal medicine easy to find and easy to
              understand &mdash; whether you are searching by disease, by health
              condition, or by exact medicine name and QD code.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Available Nationwide</h2>
            <p className="mt-3 text-brand-100">
              Slatch Pharmaceuticals products are available through medical stores
              across Pakistan, backed by decades of pharmacy relationships and
              consistent supply.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
