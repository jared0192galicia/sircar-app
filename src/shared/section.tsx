export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <h4 className="text-lg font-semibold mb-4 text-app-text">{title}</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{children}</div>
    </div>
  );
}
