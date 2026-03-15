import Navbar from "@/shared/navbar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}