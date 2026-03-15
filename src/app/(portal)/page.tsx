import IconLogo from "@/shared/ui/Logo";
import Image from "next/image";
import Button from "@/shared/ui/ButtonPrimary";
import { FileHeart, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full px-4 md:px-0">
      <ul className='circles'>
        <li className="z-40"></li>
        <li className="z-40"></li>
        <li className="z-40"></li>
        <li className="z-40"></li>
        <li className="z-40"></li>
        <li className="z-40"></li>
        <li className="z-40"></li>
        <li className="z-40"></li>
        <li className="z-40"></li>
        <li className="z-40"></li>
      </ul>
      {/* Padding lateral en móvil */}
      <section className="max-w-[1000px] mx-auto">
        <Separator />
        <div className="flex w-full justify-center items-center flex-col text-center">
          <IconLogo />
          <p className="text-lg md:text-2xl font-bold text-app-white mt-5 px-2">
            Sistema de Información de Riesgo Cardiovascular
          </p>
        </div>

        <Separator />

        <picture className="w-full flex flex-col items-center justify-center relative">
          <div className="relative w-full">
            <Image
              src="/images/hero.webp"
              alt="Hero Image"
              width={1000}
              height={400}
              className="w-full h-auto rounded-lg object-cover min-h-[250px]"
            />
            {/* Contenedor de botones: Stack en móvil, fila en escritorio */}
            <div className="static mt-6 md:mt-0 md:absolute md:bottom-16 flex flex-col md:flex-row justify-around items-center w-full gap-4 md:gap-0">
              <Button
                className="w-64 md:w-44 z-50"
                label="Usuarios"
                icon={<UserPlus />}
              />
              <Button
                className="w-64 md:w-44 z-50"
                label="Entrevista"
                icon={<FileHeart />}
              />
            </div>
          </div>
        </picture>
      </section>
    </div>
  );
}

function Separator() {
  // Altura reducida en móviles para evitar scroll innecesario (IHC)
  return <div className="h-8 md:h-16"></div>;
}
