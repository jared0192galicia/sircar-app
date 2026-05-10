"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Stepper from "@/shared/ui/stepper";
import Input from "@/shared/ui/input";
import Dropdown from "@/shared/ui/dropdown";
import Button from "@/shared/ui/ButtonPrimary";
import { X, ArrowRight, Loader2, ArrowLeft, SaveIcon } from "lucide-react";
import Identification from "@/components/form/identification";
import FamilyHistory from "@/components/form/familyHistory";
import CardiovascularRisk from "@/components/form/cardiovascularRisk";
import BodyComposition from "@/components/form/bodyComposition";
import PhysicalActivity from "@/components/form/physicalActivity";

export default function InterviewPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const isNew = id === "nueva";

  const [step, setStep] = useState(1);
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
      const fetchInterview = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(`/api/entrevistas/${id}`);
          if (response.ok) {
            const data = await response.json();
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

  const sections = [
    <Identification />,
    <FamilyHistory />,
    <CardiovascularRisk />,
    <BodyComposition />,
    <PhysicalActivity />,
  ];

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
      <div className="min-h-screen bg-app-panel flex items-center justify-center">
        <Loader2 className="animate-spin text-app-white" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apppanel flex items-center justify-center flex-col">
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
        className="w-full max-w-6xl rounded-2xl bg-app-panel/50 text-app-title shadow-2xl !overflow-scroll !max-h-screen"
      >
        {/* STEPPER */}
        <div className="px-8 pb-1 border-b border-white/10">
          <Stepper steps={5} currentStep={step} />
        </div>

        {sections[step - 1]}

        {/* FOOTER */}
        <div className="flex justify-center gap-4 px-8 py-6 border-t border-white/10">
          <Button
            className="w-12 h-12 text-5xl flex justify-center items-center p-0 rounded-full"
            label=""
            onClick={prev}
            icon={<ArrowLeft />}
          />
          {step === 5 ? (
            <Button
              className=""
              label="Finalizar"
              onClick={next}
              icon={<SaveIcon />}
            />
          ) : (
            <Button
              className="w-12 h-12 text-5xl flex justify-center items-center p-0 rounded-full"
              label=""
              onClick={next}
              icon={<ArrowRight />}
            />
          )}
          {/* /> */}
        </div>
      </motion.div>
    </div>
  );
}
