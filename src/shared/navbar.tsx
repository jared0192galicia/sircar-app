"use client"; // Asegúrate de tener esto si usas Next.js App Router

import cn from "@/services/clsx";
import {
  Bot,
  FileText,
  HeartPulse,
  LayoutDashboard,
  Users,
  Menu, // Icono hamburguesa
  X, // Icono para cerrar
} from "lucide-react";
import React, { useState } from "react";

type Section = {
  name: string;
  icon: any;
  selected: boolean;
  path: string;
};

const sections: Section[] = [
  { name: "Dashboard", icon: LayoutDashboard, selected: true, path: "" },
  { name: "Entrevistas", icon: FileText, selected: false, path: "" },
  { name: "Análisis de datos", icon: Bot, selected: false, path: "" },
  { name: "Gestión de usuario", icon: Users, selected: false, path: "" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-app-blue-800 text-app-white rounded-md shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <section
        className={cn(
          "bg-app-blue-800 h-screen w-[256px] fixed md:static z-45 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
            "md:translate-x-0": true,
          },
        )}
      >
        <div className="flex justify-center gap-3 h-24 items-center">
          <HeartPulse
            className="text-app-blue-400 h-10 w-8"
            style={{ fontSize: 22 }}
          />
          <span className="text-app-white font-bold text-xl">SIRCAR</span>
        </div>

        <Separator />

        <nav className="px-2 flex flex-col gap-1">
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              <Item section={section} />
            </React.Fragment>
          ))}
        </nav>
      </section>
    </>
  );
}

function Item({ section }: { section: Section }) {
  const Icon = section.icon;
  return (
    <div
      className={cn(
        "bg-app-blue-800 w-full px-4 py-1 rounded-lg",
        "flex items-center cursor-pointer text-app-white/80",
        "hover:bg-app-blue-700 transition-colors",
        {
          "bg-app-blue-700 text-app-white font-medium": section.selected,
        },
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="ml-3">{section.name}</span>
    </div>
  );
}

function Separator() {
  return <div className="bg-app-gray-200/20 h-[1px] w-full mb-8"></div>;
}
