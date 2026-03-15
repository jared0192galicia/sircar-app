export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Fondo oscuro profundo y centrado perfecto para el formulario
    <div className="min-h-screen bg-app-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Aquí podrías poner un logo pequeño que aparezca arriba de todos los formularios de auth */}
        <div className="text-center mb-8">
          <h1 className="text-app-white text-3xl font-bold tracking-tight">
            SIRCAR
          </h1>
        </div>

        {children}
      </div>
    </div>
  );
}
