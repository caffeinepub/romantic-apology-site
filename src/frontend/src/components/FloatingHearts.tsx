const HEARTS = ["💗", "💕", "💖", "💓", "💞", "❤️", "🌸", "💝", "💗", "💕"];

export function FloatingHearts() {
  return (
    <div
      role="presentation"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {HEARTS.map((heart, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list, order never changes
          key={i}
          style={{
            position: "absolute",
            bottom: "-20px",
            left: `${8 + i * 9}%`,
            fontSize: `${1.2 + (i % 3) * 0.6}rem`,
            animation: `heartFloat ${3 + (i % 4) * 1.2}s ease-in-out ${
              i * 0.6
            }s infinite`,
            opacity: 0.7,
          }}
        >
          {heart}
        </div>
      ))}
    </div>
  );
}
