import ContactForm from "@/components/ContactForm";
import { PHONE_DISPLAY, PHONE_TEL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Contact Us | Slatch Pharmaceuticals",
};

export default function ContactPage() {
  return (
    <div className="container-page py-14">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-500 max-w-xl">
        Have a question about a product or your order? Reach out and our team will
        get back to you.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,42rem)_minmax(0,20rem)]">
        <ContactForm />

        <aside className="h-fit space-y-5 rounded-xl border border-gray-200 bg-white p-6 text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Phone</p>
            <a href={PHONE_TEL} className="mt-1 block text-lg font-semibold text-brand-700 hover:underline">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Email</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-1 block break-all font-medium text-brand-700 hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
