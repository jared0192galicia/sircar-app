'use client';
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full max-w-md p-8 bg-[#020817]">
      {/* Input de Usuario/Correo */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Mail
            className="text-[#94A3B6] group-focus-within:text-[#3B82F6] transition-colors"
            size={24}
            strokeWidth={1.5}
          />
        </div>
        <input
          type="text"
          placeholder="Usuario o Correo"
          className="w-full h-16 pl-14 pr-6 bg-transparent border-2 border-[#DAE8F4]/20 rounded-3xl text-[#F8FAFC] placeholder-[#94A3B6] outline-none focus:border-[#3B82F6] transition-all text-lg"
        />
      </div>

      {/* Input de Contraseña */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Lock
            className="text-[#94A3B6] group-focus-within:text-[#3B82F6] transition-colors"
            size={24}
            strokeWidth={1.5}
          />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          className="w-full h-16 pl-14 pr-14 bg-transparent border-2 border-[#DAE8F4]/20 rounded-3xl text-[#F8FAFC] placeholder-[#94A3B6] outline-none focus:border-[#3B82F6] transition-all text-lg"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-5 flex items-center text-[#94A3B6] hover:text-[#F8FAFC] transition-colors"
        >
          {showPassword ? (
            <EyeOff size={24} strokeWidth={1.5} />
          ) : (
            <Eye size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </div>
  );
}
