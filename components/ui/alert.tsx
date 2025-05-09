"use client";
import { useAlert } from "@/context/AlertContext";
import { useEffect } from "react";

const Alert = () => {
  const { alertMessage, alertType, clearAlert } = useAlert();

  if (!alertMessage || !alertType) return null;

  useEffect(() => {
    if (alertMessage && alertType) {
      const timer = setTimeout(() => {
        clearAlert();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage, alertType, clearAlert]);

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-lg p-4 rounded-lg shadow-lg ${
        alertType === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-white">{alertMessage}</span>
        <button onClick={clearAlert} className="text-white">
          ×
        </button>
      </div>
    </div>
  );
};

export default Alert;
