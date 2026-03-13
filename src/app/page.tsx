import IconLogo from "@/shared/ui/Logo";
import Image from "next/image";
import Button from "@/shared/ui/ButtonPrimary";
import { FileHeart, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <section>
        <Separator />
        <div className="flex w-full justify-center items-center h24 flex-col">
          <IconLogo />
          <p className="text-lg md:text-2xl font-bold text-app-white mt-5">
            Sistema de Información de Riesgo Cardiovascular
          </p>
        </div>

        <Separator />

        <picture className="w-full h-full flex items-center justify-center relative">
          <Image
            src="/images/hero.webp"
            alt="Hero Image"
            width={1000}
            height={400}
          />
          <div className="absolute bottom-16 flex justify-around w-[1000px]">
            <Button className="2-44" label="Usuarios" icon={<UserPlus />} />
            <Button className="2-44" label="Entrevista" icon={<FileHeart />} />
          </div>
        </picture>
      </section>
    </div>
  );
}

function Separator() {
  return <div className="h-16"></div>;
}
