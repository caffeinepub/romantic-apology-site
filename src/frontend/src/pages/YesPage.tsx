import { CelebrationParticles } from "../components/CelebrationParticles";

export function YesPage() {
  return (
    <div
      className="page-layer"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, oklch(90% 0.05 10) 0%, oklch(93% 0.03 5) 40%, oklch(97% 0.015 5) 100%)",
        position: "relative",
        minHeight: "100dvh",
      }}
    >
      <CelebrationParticles />

      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "680px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
          padding: "2rem 1rem",
        }}
      >
        {/* Big celebration emoji */}
        <div
          className="slide-up-1"
          style={{
            fontSize: "4rem",
            lineHeight: 1,
            filter: "drop-shadow(0 4px 16px oklch(70% 0.14 10 / 0.4))",
          }}
        >
          🎉💖🎉
        </div>

        {/* Main romantic heading */}
        <h1
          className="slide-up-2"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(2rem, 7vw, 3.8rem)",
            fontWeight: 700,
            color: "oklch(28% 0.13 10)",
            lineHeight: 1.25,
            textShadow: "0 2px 24px oklch(70% 0.14 10 / 0.35)",
            margin: 0,
          }}
        >
          I lovvvvveeeeee youuuuuueeeee meraaaa bchaaaaaaaaa
          💖💖💖💖💖😘😘😘🤗🤗💞💞
        </h1>

        {/* Thank you card */}
        <div
          className="romantic-card slide-up-3"
          style={{
            width: "100%",
            background:
              "linear-gradient(135deg, white 0%, oklch(97% 0.025 5) 100%)",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🥺💗</div>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "oklch(35% 0.04 10)",
              marginBottom: "0.75rem",
            }}
          >
            Thank youuu veryyyyy muchhhh for forgiving me 🥺💗
          </p>
          <p
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
              fontWeight: 600,
              color: "oklch(40% 0.15 10)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Now please call me naaa… I&apos;m missing you a lot 😭💞
          </p>
        </div>

        {/* WhatsApp CTA button */}
        <div className="slide-up-4">
          <a
            href="https://wa.me/919135590666"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-romantic btn-romantic-primary btn-glow-pulse"
            data-ocid="yes.primary_button"
            style={{
              fontSize: "1.1rem",
              padding: "1rem 2.5rem",
              background:
                "linear-gradient(135deg, oklch(55% 0.19 150), oklch(60% 0.18 150))",
              boxShadow: "0 4px 24px oklch(55% 0.19 150 / 0.4)",
              display: "inline-flex",
            }}
          >
            Call me maybe? 📞💖
          </a>
        </div>

        {/* Footer love note */}
        <div
          className="slide-up-5"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.2rem",
            color: "oklch(55% 0.1 10)",
            opacity: 0.8,
          }}
        >
          With all my love, always 💗🌹
        </div>
      </div>
    </div>
  );
}
