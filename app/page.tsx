"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="min-h-screen bg-black text-gold flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(255,215,0,0.15), transparent 70%), url('/images/paisley-bg-gold.png')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD70022] to-black animate-pulse"></div>

      <h1
        className={`text-6xl md:text-8xl font-extrabold tracking-wide ${
          fade ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } transition-all duration-1000 text-center`}
        style={{
          color: "#FFD700",
          textShadow: "0 0 20px #FFD700, 0 0 40px #FFD700",
        }}
      >
        NERO11VISION
      </h1>

      <p
        className={`mt-6 text-xl md:text-2xl max-w-3xl text-center ${
          fade ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1500`}
        style={{
          color: "#d4af37",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        The Forever‑Learning Culture Engine — ATL street‑born, quantum‑AI powered,
        emotionally intelligent, radically creative, and forever evolving.
      </p>

      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#FFD70033] to-[#00000000] blur-3xl animate-spin-slow"></div>

      <button
        className="mt-12 px-8 py-4 border-2 border-gold text-gold font-bold text-lg rounded-full hover:bg-gold hover:text-black transition-all duration-500 shadow-[0_0_20px_#FFD700]"
        onClick={() => alert("Entering God‑Mode Forever")}
      >
        Enter God‑Mode Forever
      </button>
    </main>
  );
}
