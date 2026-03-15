"use client";
import { Column, DataTable } from "@/shared/ui/table/Column";

export default function Entrevistas() {
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
    <div className="">
      <div className="p-10 bg-app-blue-800/50 mt-20">
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
