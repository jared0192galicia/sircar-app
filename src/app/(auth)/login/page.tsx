"use client";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import IconLogo from "@/shared/ui/WhiteLogo";
import Button from "@/shared/ui/ButtonPrimary";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center">
        <IconLogo />
      </div>
      <div className="flex p-20 px-32 flex-col gap-6 w-full md:w-[600px] m-5 bg-app-blue-800 rounded-xl">
        {/* Input de Usuario/Correo */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Mail
              className="text-app-gray-500 group-focus-within:text-app-blue-400 transition-colors"
              size={24}
              strokeWidth={1.5}
            />
          </div>
          <input
            type="text"
            placeholder="Usuario o Correo"
            className="w-full h-14 pl-14 pr-6 bg-transparent border-2 border-app-gray-200/20 rounded-2xl text-app-white placeholder-app-gray-500 outline-none focus:border-app-blue-400 transition-all text-lg"
          />
        </div>

        {/* Input de Contraseña */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Lock
              className="text-app-gray-500 group-focus-within:text-app-blue-400 transition-colors"
              size={24}
              strokeWidth={1.5}
            />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full h-14 pl-14 pr-14 bg-transparent border-2 border-app-gray-200/20 rounded-2xl text-app-white placeholder-app-gray-500 outline-none focus:border-app-blue-400 transition-all text-lg"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-5 flex items-center text-app-gray-500 hover:text-app-white transition-colors"
          >
            {showPassword ? (
              <EyeOff size={24} strokeWidth={1.5} />
            ) : (
              <Eye size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
        <span className="text-sm text-app-gray-500 text-right w-full">
          ¿Olvidaste tu contraseña?
        </span>

        <Button label="Ingresar" className="my-6 w-full m-auto border-app-white/60 border" icon={<LogIn />}></Button>
      </div>
    </>
  );
}
