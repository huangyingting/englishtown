"use client";

import { useEffect, useState } from "react";
import { EnglishTownApp } from "@/components/views/profile-settings-views";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <EnglishTownApp />;
}
