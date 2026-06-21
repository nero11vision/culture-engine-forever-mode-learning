"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <h1>NERO11VISION</h1>
    </main>
  );
}
