export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Fondo oscuro profundo y centrado perfecto para el formulario
    <div className="min-h-screen bg-app-blue-900 flex items-center justify-center p-4">
      <div className="">
        {children}
      </div>
    </div>
  );
}
