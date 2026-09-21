import { Leaf, ShieldCheck, Users, Award, Factory, Globe, CircleCheckBig } from "lucide-react";

export const metadata = {
  title: "About Us | Slatch Pharmaceuticals",
  description: "Learn about Slatch Pharmaceuticals and the structure behind its herbal medicines in Pakistan.",
};

const HIGHLIGHTS = [
  {
    icon: Leaf,
    title: "40+ Years of Herbal Service",
    text: "Qadri Dawakhana® Herbal Medicines has been serving people with its herbal medicines for more than 40 years.",
  },
  {
    icon: Factory,
    title: "Regulated Manufacturing",
    text: "The medicines are manufactured by BDK Laboratories®, Faisalabad, Pakistan under a third-party manufacturing agreement.",
  },
  {
    icon: Globe,
    title: "Nationwide Access",
    text: "Slatch Pharmaceuticals® works to make these herbal medicines easier to discover, understand, and access across Pakistan.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Structure",
    text: "Customers can clearly identify who owns the formulation, who manufactures the medicine, and who distributes it.",
  },
];

const BUSINESS_STRUCTURE = [
  "Formulation Owner: Qadri Dawakhana® Herbal Medicines",
  "Herbal Service Heritage: More than 40 years",
  "Third-Party Manufacturer: BDK Laboratories®, Faisalabad, Pakistan",
  "Form 7 / DRAP Enlistment Holder: BDK Laboratories®, Faisalabad, Pakistan",
  "Manufacturing & Regulatory Documentation: BDK Laboratories®, Faisalabad, Pakistan",
  "Third-Party Manufacturing Agreement: Qadri Dawakhana® Herbal Medicines with BDK Laboratories®, Faisalabad, Pakistan",
  "Marketing & Distribution: Slatch Pharmaceuticals®",
];

const COMMITMENT_ITEMS = [
  "Preserving the herbal formulation heritage of Qadri Dawakhana®",
  "Maintaining clear formulation ownership",
  "Providing transparent manufacturer information",
  "Displaying applicable regulatory and enlistment details",
  "Providing accurate and understandable product information",
  "Supporting responsible product presentation",
  "Maintaining professional marketing and distribution",
  "Expanding reliable commercial availability",
  "Providing customer-focused support",
  "Making established herbal medicines accessible across Pakistan",
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="bg-brand-50 border-b border-brand-100">
        <div className="container-page py-14 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              About us
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              About Slatch Pharmaceuticals®
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Slatch Pharmaceuticals® is a herbal medicines marketing and distribution company dedicated to making established herbal medicines more accessible to customers across Pakistan through professional marketing, reliable distribution, clear product information, and a transparent retail experience.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-gray-900">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-3xl bg-brand-900 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Our business structure</h2>
              <p className="mt-4 text-brand-100 leading-7">
                Our medicines bring together the 40+ years of herbal service and formulation heritage of Qadri Dawakhana® Herbal Medicines, the regulated third-party manufacturing capabilities of BDK Laboratories®, Faisalabad, Pakistan, and the marketing and distribution network of Slatch Pharmaceuticals®.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Why customers can trust this structure</h3>
              <p className="mt-3 text-brand-100 leading-7">
                Our business structure is intentionally transparent. Customers can clearly identify who owns the formulation, who manufactures the medicine, who holds the applicable regulatory documentation, who markets and distributes the medicine, and what product-specific information applies to the medicine they are purchasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">40+ Years of Herbal Service</h2>
            <p className="mt-4 leading-7 text-gray-700">
              Qadri Dawakhana® Herbal Medicines has been serving people with its herbal medicines for more than 40 years.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Over the years, customers from different cities and regions across Pakistan increasingly requested access to these medicines. As demand expanded beyond the local market, a professional, regulated, and commercially scalable manufacturing structure became necessary to make the medicines available to a wider customer base.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Formulation Ownership</h2>
            <p className="mt-4 leading-7 text-gray-700">
              The herbal formulations marketed and distributed through Slatch Pharmaceuticals® are owned by Qadri Dawakhana® Herbal Medicines.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Qadri Dawakhana® retains ownership of its formulations and the traditional herbal medicine knowledge associated with them.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Why BDK Laboratories®, Faisalabad, Pakistan?</h2>
            <p className="mt-4 leading-7 text-gray-700">
              To meet growing demand from customers across Pakistan, Qadri Dawakhana® Herbal Medicines entered into a third-party manufacturing agreement with BDK Laboratories®, Faisalabad, Pakistan.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              BDK Laboratories®, Faisalabad, Pakistan is a DRAP-registered manufacturing company and holds the applicable regulatory and commercial manufacturing permissions for the respective medicines.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              This arrangement enables the traditional formulations of Qadri Dawakhana® to be manufactured through a professional and regulated commercial manufacturing system while maintaining clear ownership of the original formulations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Third-Party Manufacturing</h2>
            <p className="mt-4 leading-7 text-gray-700">
              The medicines are manufactured by BDK Laboratories®, Faisalabad, Pakistan under the third-party manufacturing agreement with Qadri Dawakhana® Herbal Medicines.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              For the applicable medicines, BDK Laboratories®, Faisalabad, Pakistan is responsible for and holds the relevant:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Form 7 documentation</li>
              <li>DRAP product enlistment numbers</li>
              <li>Manufacturing approvals</li>
              <li>Applicable regulatory documentation</li>
              <li>Commercial manufacturing and sale permissions</li>
            </ul>
            <p className="mt-4 leading-7 text-gray-700">
              These regulatory and manufacturing documents belong to BDK Laboratories®, Faisalabad, Pakistan, not Slatch Pharmaceuticals®.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Role of Slatch Pharmaceuticals®</h2>
            <p className="mt-4 leading-7 text-gray-700">
              Slatch Pharmaceuticals® is responsible for the marketing and distribution of these medicines.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Our role is to make the medicines professionally available to customers through appropriate retail and distribution channels while ensuring that product information is presented clearly and transparently.
            </p>
            <p className="mt-4 leading-7 text-gray-700">Our responsibilities include:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Marketing and brand communication</li>
              <li>Product distribution</li>
              <li>Commercial availability</li>
              <li>Retail and digital presence</li>
              <li>Customer information and support</li>
              <li>Product presentation</li>
              <li>Market development</li>
              <li>Expanding access to customers across Pakistan</li>
            </ul>
            <p className="mt-4 leading-7 text-gray-700">
              Slatch Pharmaceuticals® does not claim ownership of the herbal formulations, manufacturing facility, Form 7 documentation, DRAP enlistments, or manufacturing approvals.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Regulatory Transparency</h2>
            <p className="mt-4 leading-7 text-gray-700">
              We believe customers should clearly understand the regulatory identity of the medicines they purchase.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Each applicable medicine may be presented with relevant information including:
            </p>
            <ul className="mt-4 grid gap-2 pl-6 text-gray-700 md:grid-cols-2">
              <li>Product name and identity</li>
              <li>Manufacturer details</li>
              <li>DRAP enlistment number</li>
              <li>Form 7 information</li>
              <li>Herbal composition</li>
              <li>Approved therapeutic indication</li>
              <li>Directions for use</li>
              <li>Dosage information</li>
              <li>Precautions</li>
              <li>Storage instructions</li>
              <li>Pack information</li>
              <li>Other applicable regulatory details</li>
            </ul>
            <p className="mt-4 leading-7 text-gray-700">
              Therapeutic, treatment, or cure-related information is presented according to the approved regulatory scope and documentation applicable to the respective medicine.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">Our Business Structure</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {BUSINESS_STRUCTURE.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-brand-50 p-3 text-gray-700">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Nationwide Access</h2>
            <p className="mt-4 leading-7 text-gray-700">
              The transition to regulated third-party manufacturing and professional distribution was driven by increasing customer demand from across Pakistan.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Through this structure, Slatch Pharmaceuticals® works to make these herbal medicines easier to discover, understand, and access through modern retail and distribution channels.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Commitment</h2>
            <p className="mt-4 leading-7 text-gray-700">
              At Slatch Pharmaceuticals®, we believe trust begins with transparency.
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-gray-700">
              {COMMITMENT_ITEMS.map((item) => (
                <li key={item} className="list-disc leading-7">{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-7 text-gray-700">
              Through this structure, the 40+ years of herbal medicine service and formulation heritage of Qadri Dawakhana® Herbal Medicines is supported by the regulated manufacturing capabilities of BDK Laboratories®, Faisalabad, Pakistan, while Slatch Pharmaceuticals® focuses exclusively on professional marketing and distribution.
            </p>
          </div>

          <div className="rounded-2xl bg-brand-900 px-6 py-8 text-center text-white md:px-10">
            <p className="text-xl font-semibold tracking-wide md:text-2xl">
              40+ Years of Herbal Heritage. Regulated Manufacturing. Professional Marketing &amp; Distribution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
