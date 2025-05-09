"use client";

import { Alert } from "@/components/admin/alert-admin";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertContextType {
  showAlert: (message: string, type: AlertType, duration?: number) => void;
  hideAlert: () => void;
}

interface AlertState {
  message: string;
  type: AlertType;
  visible: boolean;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<AlertState>({
    message: "",
    type: "info",
    visible: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hideAlert = useCallback(() => {
    setAlert((prev) => ({ ...prev, visible: false }));

    // Remove alert from DOM after animation
    timeoutRef.current = setTimeout(() => {
      setAlert((prev) => ({ ...prev, message: "" }));
    }, 300); // match animation duration
  }, []);

  const showAlert = useCallback(
    (message: string, type: AlertType, duration = 3000) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      setAlert({ message, type, visible: true });

      if (duration > 0) {
        timeoutRef.current = setTimeout(() => {
          hideAlert();
        }, duration);
      }
    },
    [hideAlert]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      <Alert
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
        onClose={hideAlert}
      />
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
