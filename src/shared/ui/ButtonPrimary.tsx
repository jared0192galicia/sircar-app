import cn from "@/services/clsx";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({
  label,
  onClick,
  className,
  icon,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "w-fit h-12 bg-app-blue-400 text-app-white font-bold py-2 px-4 rounded-lg",
        "cursor-pointer flex items-center gap-2",
        "transition-colors duration-300",
        "hover:bg-app-blue-500",
        className,
      )}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
