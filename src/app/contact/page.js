import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

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

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-gray-900">Address</p>
              <p className="text-sm text-gray-500">123 Herbal Avenue, Lahore, Pakistan</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-sm text-gray-500">+92 300 1234567</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-sm text-gray-500">support@slatchpharma.com</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
