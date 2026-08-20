export default function PolicyLayout({ title, updated, children }) {
  return (
    <div className="container-page py-14 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {updated && <p className="mt-2 text-sm text-gray-400">Last updated: {updated}</p>}
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600">{children}</div>
    </div>
  );
}
