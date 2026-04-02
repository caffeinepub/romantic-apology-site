import { FloatingHearts } from "../components/FloatingHearts";

interface IntroPageProps {
  onNext: () => void;
}

export function IntroPage({ onNext }: IntroPageProps) {
  return (
    <div
      className="page-layer"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, oklch(93% 0.03 5) 0%, oklch(97% 0.015 5) 70%)",
        position: "relative",
      }}
    >
      <FloatingHearts />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
          maxWidth: "700px",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        {/* Decorative top ornament */}
        <div
          className="slide-up-1"
          style={{ fontSize: "2.5rem", lineHeight: 1 }}
        >
          🌸 🌹 🌸
        </div>

        {/* Main heading */}
        <h1
          className="slide-up-2"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(2.4rem, 8vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "oklch(30% 0.12 10)",
            textShadow: "0 2px 20px oklch(70% 0.14 10 / 0.3)",
            margin: 0,
          }}
        >
          Hello, love...
          <br />
          I&apos;m missing you a lot 💗🥺
        </h1>

        {/* Sub text */}
        <p
          className="slide-up-3"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1.05rem",
            color: "oklch(45% 0.05 10)",
            lineHeight: 1.7,
            maxWidth: "420px",
          }}
        >
          There&apos;s something I need to say to you...
          <br />
          <span style={{ fontStyle: "italic" }}>
            Something from the heart 🥺
          </span>
        </p>

        {/* Next button */}
        <div className="slide-up-4">
          <button
            type="button"
            className="btn-romantic btn-romantic-primary btn-glow-pulse"
            onClick={onNext}
            data-ocid="intro.primary_button"
            style={{ fontSize: "1.1rem", padding: "1rem 3rem" }}
          >
            Next ➝
          </button>
        </div>

        {/* Bottom ornament */}
        <div
          className="slide-up-5"
          style={{ fontSize: "1.5rem", opacity: 0.6, letterSpacing: "0.5rem" }}
        >
          💗 💕 💗
        </div>
      </div>
    </div>
  );
}
