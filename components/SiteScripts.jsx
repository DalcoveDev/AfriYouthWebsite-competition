"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initSite } from "@/lib/site-interactions";

export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = initSite();
    return cleanup;
  }, [pathname]);

  return null;
}
