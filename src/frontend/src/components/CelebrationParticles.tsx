const EMOJIS = [
  "💋",
  "💖",
  "😘",
  "💞",
  "💗",
  "🌸",
  "💝",
  "😍",
  "💕",
  "🌺",
  "💋",
  "💖",
  "😘",
  "💞",
  "💗",
  "🌸",
  "💝",
  "😍",
];

export function CelebrationParticles() {
  return (
    <div
      role="presentation"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {EMOJIS.map((emoji, i) => {
        const leftPos = 3 + ((i * 5.5) % 94);
        const delay = (i * 0.18) % 2.5;
        const duration = 2 + (i % 4) * 0.5;
        const startY = 60 + (i % 3) * 15;

        return (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list, order never changes
            key={i}
            style={{
              position: "absolute",
              bottom: `${startY}px`,
              left: `${leftPos}%`,
              fontSize: `${1.4 + (i % 3) * 0.5}rem`,
              animation: `celebrationFly ${duration}s ease-out ${delay}s infinite`,
              opacity: 0,
            }}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}
