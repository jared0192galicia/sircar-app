"use client";

import { motion } from "framer-motion";
import cn from "@/services/clsx";

interface StepperProps {
  steps: number;
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  const stepArray = Array.from({ length: steps }, (_, i) => i + 1);

  return (
    <div
      className="
        w-full
        flex
        items-center
        justify-between
        relative
        py-6
      "
    >
      {/* linea base */}
      <div
        className="
          absolute
          left-0
          right-0
          h-[2px]
          bg-app-gray-200/30
        "
      />

      {/* linea progreso */}
      <motion.div
        className="
          absolute
          left-0
          h-[2px]
          bg-blue-500
        "
        initial={{ width: 0 }}
        animate={{
          width: `${((currentStep - 1) / (steps - 1)) * 100}%`,
        }}
        transition={{ duration: 0.4 }}
      />

      {stepArray.map((step) => {
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <div
            key={step}
            className="
              relative
              z-10
              flex
              items-center
              justify-center
            "
          >
            <motion.div
              animate={{
                scale: isActive ? 1.15 : 1,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={cn(
                `
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                font-semibold
                text-lg
                transition-all
                `,
                {
                  "bg-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.8)]":
                    isActive,

                  "bg-blue-500 text-white": isCompleted,

                  "bg-app-blue-800 text-app-gray-200":
                    !isActive && !isCompleted,
                },
              )}
            >
              {step}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
