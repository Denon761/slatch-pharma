import { User } from "lucide-react";

export const metadata = { title: "Account | Slatch Pharmaceuticals" };

export default function AccountPage() {
  return (
    <div className="container-page py-20 text-center">
      <User className="mx-auto h-12 w-12 text-brand-300" />
      <h1 className="mt-4 text-2xl font-bold text-gray-900">Account</h1>
      <p className="mt-2 text-gray-500">
        Account sign-in is coming soon. For order enquiries, please contact us.
      </p>
    </div>
  );
}
