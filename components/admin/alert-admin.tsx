import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "top-6 left-1/2 z-[9999] fixed flex items-start gap-3 shadow-lg px-4 py-3 rounded-xl w-full max-w-sm transition-all -translate-x-1/2 duration-300 transform",
  {
    variants: {
      type: {
        success: "bg-green-50 text-green-800 border border-green-200",
        error: "bg-red-50 text-red-800 border border-red-200",
        warning: "bg-yellow-50 text-yellow-800 border border-yellow-200",
        info: "bg-blue-50 text-blue-800 border border-blue-200",
      },
      animation: {
        enter: "opacity-100 translate-y-0",
        leave: "opacity-0 -translate-y-6 pointer-events-none",
      },
    },
    defaultVariants: {
      type: "info",
      animation: "enter",
    },
  }
);

export interface AlertProps extends VariantProps<typeof alertVariants> {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export const Alert = ({ message, type, visible, onClose }: AlertProps) => {
  return (
    <div
      className={cn(
        alertVariants({ type, animation: visible ? "enter" : "leave" })
      )}
    >
      <div className="flex-1 w-full font-medium text-sm text-center">
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Close alert"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
