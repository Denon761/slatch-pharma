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

      <div className="mt-10 max-w-2xl">
        <ContactForm />
      </div>
    </div>
  );
}
