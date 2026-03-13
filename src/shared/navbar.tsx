import cn from "@/services/clsx";
import {
  Bot,
  ChevronLeft,
  FileText,
  HeartPulse,
  LayoutDashboard,
  Users,
} from "lucide-react";
import React from "react";

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
  return (
    <section className="bg-app-blue-800 h-screen w-[256px]">
      {/* <ChevronLeft className="absolute top-4 left-4" /> */}
      <div className="flex justify-center gap-3 h-24 items-center">
        <HeartPulse
          className="text-app-blue-400 h-10 w-8"
          style={{ fontSize: 22 }}
        />
        <span className="text-app-white font-bold text-xl">SIRCAR</span>
      </div>

      <Separator />

      {sections.map((section, index) => {
        return (
          <React.Fragment key={index}>
            <Item section={section} />
          </React.Fragment>
        );
      })}
    </section>
  );
}

function Item({ section }: { section: Section }) {const Icon = section.icon;
  return (
    <div
      className={cn("bg-app-blue-800 w-full px-2 py-1 rounded-lg flex items-center", {
        "bg-app-blue-700": section.selected,
      })}
    >
      <Icon className="h-5 w-5" />
      <span className="ml-2">{section.name}</span>
    </div>
  );
}

function Separator() {
  return <div className="bg-app-gray-200 h-[1px] w-full mb-8"></div>;
}
