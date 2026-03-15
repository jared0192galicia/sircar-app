"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Stepper from "@/shared/ui/stepper";
import Input from "@/shared/ui/input";
import Dropdown from "@/shared/ui/dropdown";
import Button from "@/shared/ui/ButtonPrimary";
import { X, ArrowRight, Loader2 } from "lucide-react";
import cn from "@/services/clsx";

export default function InterviewPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const isNew = id === "nueva";

  const [step, setStep] = useState(3);
  const [isLoading, setIsLoading] = useState(!isNew);

  // Estado para controlar los valores del formulario
  const [formData, setFormData] = useState({
    presionSistolica: "",
    presionDiastolica: "",
    tratamiento: "",
    colesterol: "",
    hdl: "",
    ldl: "",
    trigliceridos: "",
    vldl: "",
    otro: "",
  });

  useEffect(() => {
    if (!isNew) {
      // Simulación de petición a tu API para consultar la entrevista
      const fetchInterview = async () => {
        try {
          setIsLoading(true);
          // Reemplaza esta URL con tu endpoint real
          const response = await fetch(`/api/entrevistas/${id}`);
          if (response.ok) {
            const data = await response.json();
            // setFormData(data); // Poblamos el formulario con los datos recibidos
          }
        } catch (error) {
          console.error("Error al consultar el cuestionario:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchInterview();
    }
  }, [id, isNew]);

  function next() {
    setStep((s) => Math.min(5, s + 1));
  }

  function prev() {
    setStep((s) => Math.max(1, s - 1));
  }

  function handleClose() {
    router.back();
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-app-blue-900 flex items-center justify-center">
        <Loader2 className="animate-spin text-app-white" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-app-blue-900 flex items-center justify-center p-6 flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between px-8 py-6 w-full">
        <h2 className="text-2xl font-semibold">
          {isNew ? "Nueva entrevista" : `Entrevista #${id}`}
        </h2>

        <button
          onClick={handleClose}
          className="text-app-gray-200 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-6xl rounded-2xl bg-app-blue-800/50 text-app-white shadow-2xl overflow-hidden"
      >
        {/* STEPPER */}
        <div className="px-8 pb-3 border-b border-white/10">
          <Stepper steps={5} currentStep={step} />
        </div>

        {/* CONTENT */}
        <div className="px-8 pt-8">
          <h3 className="text-xl font-semibold mb-6">
            Factores de riesgo cardiovasculares
          </h3>

          {/* PRESION */}
          <Section title="Presión arterial">
            <Input
              label="Presión Sistólica (mmHg)"
              value={formData.presionSistolica}
              onChange={(e) =>
                setFormData({ ...formData, presionSistolica: e })
              }
            />
            <Input
              label="Presión Diastólica (mmHg)"
              value={formData.presionDiastolica}
              onChange={(e) =>
                setFormData({ ...formData, presionDiastolica: e })
              }
            />
            <Dropdown
              label="Tratamiento antihipertensivo"
              value={formData.tratamiento}
              onChange={(val) => setFormData({ ...formData, tratamiento: val })}
              options={[
                { label: "Sí", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </Section>

          {/* PERFIL LIPIDICO */}
          <Section title="Perfil Lipídico">
            <Input
              label="Colesterol total"
              value={formData.colesterol}
              onChange={(e) => setFormData({ ...formData, colesterol: e })}
            />
            <Input
              label="HDL"
              value={formData.hdl}
              onChange={(e) => setFormData({ ...formData, hdl: e })}
            />
            <Input
              label="LDL"
              value={formData.ldl}
              onChange={(e) => setFormData({ ...formData, ldl: e })}
            />
          </Section>

          {/* PERFIL LIPIDICO 2 */}
          <Section title="Perfil Lipídico">
            <Input
              label="Triglicéridos"
              value={formData.trigliceridos}
              onChange={(e) => setFormData({ ...formData, trigliceridos: e })}
            />
            <Input
              label="VLDL"
              value={formData.vldl}
              onChange={(e) => setFormData({ ...formData, vldl: e })}
            />
            <Input
              label="Otro valor"
              value={formData.otro}
              onChange={(e) => setFormData({ ...formData, otro: e })}
            />
          </Section>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-4 px-8 py-6 border-t border-white/10">
          <Button
            className="w-64 md:w-44"
            label="Siguiente"
            onClick={next}
            icon={<ArrowRight />}
          />
        </div>
      </motion.div>
    </div>
  );
}


function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <h4 className="text-lg font-semibold mb-4 text-app-gray-200">{title}</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{children}</div>
    </div>
  );
}
