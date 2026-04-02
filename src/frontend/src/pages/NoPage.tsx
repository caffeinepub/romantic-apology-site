interface NoPageProps {
  onTryAgain: () => void;
}

export function NoPage({ onTryAgain }: NoPageProps) {
  return (
    <div
      className="page-layer"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, oklch(91% 0.04 10) 0%, oklch(97% 0.015 5) 80%)",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {/* Emoji */}
        <div
          className="slide-up-1"
          style={{ fontSize: "3.5rem", lineHeight: 1 }}
        >
          😤💗
        </div>

        {/* Card */}
        <div
          className="romantic-card slide-up-2"
          style={{
            width: "100%",
            background:
              "linear-gradient(135deg, white 0%, oklch(97% 0.02 5) 100%)",
          }}
        >
          <h1
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.8rem, 6vw, 2.5rem)",
              fontWeight: 700,
              color: "oklch(30% 0.12 10)",
              lineHeight: 1.3,
              marginBottom: "1rem",
            }}
          >
            You&apos;re not allowed to click no, my love 😤💗
          </h1>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "oklch(35% 0.04 10)",
              marginBottom: "1rem",
            }}
          >
            You have to forgive me…
          </p>

          <p
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
              fontWeight: 600,
              color: "oklch(45% 0.14 10)",
              lineHeight: 1.5,
            }}
          >
            because after all, it&apos;s just me and you 🥺💞
          </p>
        </div>

        {/* Decorative hearts */}
        <div
          className="slide-up-3"
          style={{ fontSize: "1.8rem", letterSpacing: "0.4rem" }}
        >
          💞 🥺 💞
        </div>

        {/* Try again button */}
        <div className="slide-up-4">
          <button
            type="button"
            className="btn-romantic btn-romantic-primary btn-glow-pulse"
            onClick={onTryAgain}
            data-ocid="no.primary_button"
            style={{ fontSize: "1.1rem", padding: "1rem 3rem" }}
          >
            Try Again 💖
          </button>
        </div>
      </div>
    </div>
  );
}
