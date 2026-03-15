import React from "react";
import cn from "@/services/clsx";

interface InputProps {
  label: string;
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  className,
}: InputProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        className="
          text-sm
          font-medium
          text-app-gray-200
        "
      >
        {label}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "w-full",
          "px-4 py-3",
          "rounded-2xl",
          "border",
          "bg-app-blue-800",
          "text-app-white",
          "border-app-gray-200",
          "outline-none",
          "transition-colors",
          "focus:ring-2",
          "focus:ring-app-gray-200/30",
        )}
      />
    </div>
  );
}
