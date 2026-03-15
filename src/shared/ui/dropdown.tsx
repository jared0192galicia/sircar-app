import React from "react";
import cn from "@/services/clsx";

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  label: string;
  value?: string | number;
  options: Option[];
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function Dropdown({
  label,
  value,
  options,
  onChange,
  placeholder = "Seleccionar...",
  className,
}: DropdownProps) {
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

      <select
        value={value}
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
          "appearance-none",
          "focus:ring-2",
          "focus:ring-app-gray-200/30"
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}