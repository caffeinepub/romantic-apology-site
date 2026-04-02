import { useCallback, useRef, useState } from "react";

interface ApologyPageProps {
  onYes: () => void;
  onNo: () => void;
}

export function ApologyPage({ onYes, onNo }: ApologyPageProps) {
  const [escapeCount, setEscapeCount] = useState(0);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const noContainerRef = useRef<HTMLDivElement>(null);

  const canClickNo = escapeCount >= 5;

  const handleNoEscape = useCallback(() => {
    if (canClickNo) return;

    const container = noContainerRef.current;
    const maxX = container ? Math.min(120, container.offsetWidth / 3) : 100;
    const maxY = 80;

    const newX = (Math.random() - 0.5) * 2 * maxX;
    const newY = (Math.random() - 0.5) * 2 * maxY;

    setNoOffset({ x: newX, y: newY });
    setEscapeCount((c) => c + 1);
  }, [canClickNo]);

  const handleNoClick = () => {
    if (canClickNo) {
      onNo();
    } else {
      handleNoEscape();
    }
  };

  const escapeTaunt =
    escapeCount === 1
      ? "Heyyy, not so fast! 😤"
      : escapeCount === 2
        ? "The button is running away from you 😂"
        : escapeCount === 3
          ? "Even the button doesn't want to say no 💕"
          : escapeCount === 4
            ? "One more try... 👀"
            : null;

  return (
    <div
      className="page-layer"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, oklch(93% 0.03 5) 0%, oklch(97% 0.015 5) 80%)",
        padding: "2rem 1rem 4rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Card */}
        <div className="romantic-card slide-up-1" style={{ width: "100%" }}>
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🥺💔</div>
            <h1
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
                fontWeight: 700,
                color: "oklch(30% 0.12 10)",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              I&apos;m So Sorry, Love...
            </h1>
          </div>

          {/* Message paragraphs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              className="slide-up-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "oklch(35% 0.04 10)",
                background: "oklch(97% 0.015 5)",
                borderRadius: "1rem",
                padding: "1rem 1.2rem",
                borderLeft: "3px solid oklch(70% 0.14 10)",
                margin: 0,
              }}
            >
              I know I messed up... and I hate that I made you upset 🥺💔
            </p>

            <p
              className="slide-up-3"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "oklch(35% 0.04 10)",
                background: "oklch(97% 0.015 5)",
                borderRadius: "1rem",
                padding: "1rem 1.2rem",
                borderLeft: "3px solid oklch(60% 0.18 10)",
                margin: 0,
              }}
            >
              Talking to you is my favorite part of the day, and without you
              everything feels incomplete...
            </p>

            <p
              className="slide-up-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "oklch(35% 0.04 10)",
                background: "oklch(97% 0.015 5)",
                borderRadius: "1rem",
                padding: "1rem 1.2rem",
                borderLeft: "3px solid oklch(70% 0.14 10)",
                margin: 0,
              }}
            >
              Even one minute feels too long, and you said 48 hours 😭
            </p>

            <p
              className="slide-up-5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "oklch(35% 0.04 10)",
                background: "oklch(93% 0.03 5)",
                borderRadius: "1rem",
                padding: "1rem 1.2rem",
                borderLeft: "3px solid oklch(60% 0.18 10)",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Please forgive me, my love 💗👉👈
            </p>
          </div>

          {/* End question */}
          <p
            className="slide-up-6"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.3rem, 4vw, 1.7rem)",
              fontWeight: 600,
              color: "oklch(40% 0.15 10)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Could you please forgive me, my love? 💞
          </p>
        </div>

        {/* Buttons area */}
        <div
          ref={noContainerRef}
          style={{
            position: "relative",
            minHeight: "160px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* YES button */}
          <button
            type="button"
            className="btn-romantic btn-romantic-primary btn-glow-pulse"
            onClick={onYes}
            data-ocid="apology.primary_button"
            style={{ fontSize: "1.1rem", minWidth: "140px" }}
          >
            YES 💖
          </button>

          {/* NO button — escapes on hover */}
          <button
            type="button"
            className="btn-romantic btn-romantic-secondary"
            onMouseEnter={handleNoEscape}
            onClick={handleNoClick}
            data-ocid="apology.secondary_button"
            style={{
              fontSize: "1.1rem",
              minWidth: "140px",
              transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: canClickNo ? "pointer" : "not-allowed",
              opacity: canClickNo ? 1 : 0.85,
            }}
            title={
              canClickNo
                ? "Fine, click it... 😤"
                : `Running away! (${escapeCount}/5 attempts)`
            }
          >
            {canClickNo ? "NO 😤" : `NO 😤 (${5 - escapeCount} left)`}
          </button>
        </div>

        {!canClickNo && escapeCount > 0 && escapeTaunt && (
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.85rem",
              color: "oklch(60% 0.18 10)",
              fontStyle: "italic",
              textAlign: "center",
              animation: "slideUp 0.3s ease-out",
            }}
          >
            {escapeTaunt}
          </p>
        )}

        {canClickNo && (
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.85rem",
              color: "oklch(55% 0.1 10)",
              fontStyle: "italic",
              textAlign: "center",
              animation: "slideUp 0.3s ease-out",
            }}
          >
            Fine fine, you can click it now... but are you SURE? 😭
          </p>
        )}
      </div>
    </div>
  );
}
