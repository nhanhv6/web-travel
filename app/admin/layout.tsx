
import { AlertProvider } from "@/context/AlertProvider";
import type { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <AlertProvider>{children}</AlertProvider>;
}
