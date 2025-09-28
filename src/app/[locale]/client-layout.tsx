"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingPage from "@/components/LoadingPage";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <main className="max-w-[100vw] overflow-hidden">
      {loading ? <LoadingPage /> : children}
    </main>
  );
}
