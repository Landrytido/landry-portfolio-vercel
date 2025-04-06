import { motion } from "framer-motion";

export const CodeBackground = () => {
  // Array of code symbols
  const codeSymbols = [
    "{",
    "}",
    "<>",
    "//",
    "=",
    "=>",
    "&&",
    "||",
    "()",
    "[]",
    "...",
    "?.",
    ".map",
    "await",
    "import",
    "export",
    "const",
    "function",
    "return",
  ];

  // Generate random positions for symbols (Layer 1 - Foreground)
  const layerOne = Array.from({ length: 25 }, (_, i) => ({
    id: `front-${i}`,
    symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: `${Math.random() * (1.8 - 1.2) + 1.2}rem`,
    opacity: 0.3,
    color: i % 3 === 0 ? "#10B981" : i % 3 === 1 ? "#4F46E5" : "#FF5722",
    duration: Math.random() * (15 - 10) + 10,
    delay: Math.random() * 5,
  }));

  // Generate random positions for symbols (Layer 2 - Background)
  const layerTwo = Array.from({ length: 30 }, (_, i) => ({
    id: `mid-${i}`,
    symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: `${Math.random() * (1.2 - 0.8) + 0.8}rem`,
    opacity: 0.2,
    color:
      i % 4 === 0
        ? "#10B981"
        : i % 4 === 1
        ? "#4F46E5"
        : i % 4 === 2
        ? "#FF5722"
        : "#64748B",
    duration: Math.random() * (20 - 12) + 12,
    delay: Math.random() * 8,
  }));

  return (
    <div className="w-full h-full" style={{ position: "absolute", zIndex: 5 }}>
      {/* Foreground symbols */}
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
            y: [0, Math.random() * 10 - 5, 0], // Subtle floating effect
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

      {/* Background symbols */}
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
            y: [0, Math.random() * 10 - 5, 0], // Subtle floating effect
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
