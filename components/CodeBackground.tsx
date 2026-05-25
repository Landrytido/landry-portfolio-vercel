"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const seededRandom = (seed: number): number => {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
};

export const CodeBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const codeSymbols = [
    "{", "}", "<>", "//", "=", "=>", "&&", "||",
    "()", "[]", "...", "?.", ".map", "await", "import",
    "export", "const", "function", "return",
  ];

  const layerOne = Array.from({ length: 25 }, (_, i) => {
    const s = i * 7;
    return {
      id: `front-${i}`,
      symbol: codeSymbols[Math.floor(seededRandom(s) * codeSymbols.length)],
      x: `${seededRandom(s + 1) * 100}%`,
      y: `${seededRandom(s + 2) * 100}%`,
      size: `${seededRandom(s + 3) * 0.6 + 1.2}rem`,
      opacity: 0.3,
      color: i % 3 === 0 ? "#10B981" : i % 3 === 1 ? "#4F46E5" : "#FF5722",
      duration: seededRandom(s + 4) * 5 + 10,
      delay: seededRandom(s + 5) * 5,
      yOffset: seededRandom(s + 6) * 10 - 5,
    };
  });

  const layerTwo = Array.from({ length: 30 }, (_, i) => {
    const s = i * 7 + 200;
    return {
      id: `mid-${i}`,
      symbol: codeSymbols[Math.floor(seededRandom(s) * codeSymbols.length)],
      x: `${seededRandom(s + 1) * 100}%`,
      y: `${seededRandom(s + 2) * 100}%`,
      size: `${seededRandom(s + 3) * 0.4 + 0.8}rem`,
      opacity: 0.2,
      color:
        i % 4 === 0 ? "#10B981"
        : i % 4 === 1 ? "#4F46E5"
        : i % 4 === 2 ? "#FF5722"
        : "#64748B",
      duration: seededRandom(s + 4) * 8 + 12,
      delay: seededRandom(s + 5) * 8,
      yOffset: seededRandom(s + 6) * 10 - 5,
    };
  });

  // Rendu serveur : div vide, pas de contenu animé (évite l'erreur d'hydratation)
  if (!isClient) {
    return <div className="w-full h-full" style={{ position: "absolute", zIndex: 5 }} />;
  }

  return (
    <div className="w-full h-full" style={{ position: "absolute", zIndex: 5 }}>
      {layerOne.map((item) => (
        <motion.div
          key={item.id}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            fontSize: item.size,
            color: item.color,
            fontFamily: "monospace",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, item.opacity, 0],
            y: [0, item.yOffset, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {layerTwo.map((item) => (
        <motion.div
          key={item.id}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            fontSize: item.size,
            color: item.color,
            fontFamily: "monospace",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, item.opacity, 0],
            y: [0, item.yOffset, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
};
