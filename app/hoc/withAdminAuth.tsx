"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function withAdminAuth<P>(WrappedComponent: any) {
  const AdminProtected = (props: P) => {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          router.replace("/login");
        } else {
          setAuthorized(true);
        }

        setLoading(false);
      };

      checkAuth();
    }, []);

    if (loading) return <div className="text-white">Loading...</div>;

    return authorized ? <WrappedComponent {...props} /> : null;
  };

  return AdminProtected;
}
