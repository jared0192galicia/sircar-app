"use client";
import Button from "@/shared/ui/ButtonPrimary";
import Separator from "@/shared/ui/separator";
import { Column, DataTable } from "@/shared/ui/table/page";
import { BadgePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import InterviewDialog from "./[id]/page";

export default function Entrevistas() {
  // const [open, setOpen] = useState(false);
  const router = useRouter();

  const data = Array.from({ length: 5000 }).map((_, i) => ({
    id: i,
    paciente: "Jared Galicia",
    entrevistador: "Dr. Ulises",
    estado: i % 2 === 0 ? "Completada" : "En progreso",
    fecha: "30/11/2025",
  }));

  const statusTemplate = (row: any) => {
    const isComplete = row.estado === "Completada";
    return (
      <span
        className={`px-4 py-1 rounded-full text-xs font-semibold ${
          isComplete ? "bg-blue-600 text-white" : "bg-[#1e293b] text-slate-400"
        }`}
      >
        {row.estado}
      </span>
    );
  };

  return (
    <div>
      <section className="flex justify-between w-full mt-16 px-10">
        <h1 className="text-2xl font-bold text-app-white mb-4">
          Gestión de Entrevistas
        </h1>
        <Button
          label="Nueva entrevista"
          icon={<BadgePlus />}
          onClick={() => router.push("/entrevistas/nueva")}
        />
      </section>

      <Separator />
      <div className="p-8 bg-app-panel/50 rounded-lg m-10">
        <h2 className="text-xl font-bold text-app-title mb-6">
          Entrevistas recientes
        </h2>
        <DataTable value={data} scrollHeight="400px">
          <Column field="paciente" header="Paciente" />
          <Column field="entrevistador" header="Entrevistador" />
          <Column field="estado" header="Estado" body={statusTemplate} />
          <Column field="fecha" header="Fecha" />
          <Column field="fecha" header="Fecha" />
        </DataTable>
      </div>

    </div>
  );
}
