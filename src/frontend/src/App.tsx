import { useCallback, useState } from "react";
import { MusicToggle } from "./components/MusicToggle";
import { PetalCanvas } from "./components/PetalCanvas";
import { ApologyPage } from "./pages/ApologyPage";
import { IntroPage } from "./pages/IntroPage";
import { NoPage } from "./pages/NoPage";
import { YesPage } from "./pages/YesPage";

type Page = "intro" | "apology" | "no" | "yes";

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedPage, setDisplayedPage] = useState<Page>("intro");

  const navigateTo = useCallback(
    (page: Page) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setDisplayedPage(page);
        setIsTransitioning(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 320);
    },
    [isTransitioning],
  );

  const handleNext = useCallback(() => navigateTo("apology"), [navigateTo]);
  const handleYes = useCallback(() => navigateTo("yes"), [navigateTo]);
  const handleNo = useCallback(() => navigateTo("no"), [navigateTo]);
  const handleTryAgain = useCallback(() => {
    navigateTo("apology");
  }, [navigateTo]);

  // Prefers-reduced-motion support
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--color-blush-bg)",
        position: "relative",
      }}
    >
      {/* Ambient falling petals — always present */}
      {!prefersReducedMotion && <PetalCanvas />}

      {/* Music toggle — always present */}
      <MusicToggle />

      {/* Page content with transition */}
      <div
        key={displayedPage}
        className="page-enter"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transition: prefersReducedMotion ? "none" : "opacity 0.32s ease",
        }}
      >
        {displayedPage === "intro" && <IntroPage onNext={handleNext} />}
        {displayedPage === "apology" && (
          <ApologyPage onYes={handleYes} onNo={handleNo} />
        )}
        {displayedPage === "no" && <NoPage onTryAgain={handleTryAgain} />}
        {displayedPage === "yes" && <YesPage />}
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "1.5rem 1rem",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "0.78rem",
          color: "oklch(65% 0.06 10)",
          borderTop: "1px solid oklch(88% 0.04 5)",
          background: "oklch(97% 0.015 5)",
        }}
      >
        © {new Date().getFullYear()} Built with{" "}
        <span style={{ color: "oklch(60% 0.18 10)" }}>♥</span> using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
            typeof window !== "undefined" ? window.location.hostname : "",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "oklch(60% 0.18 10)", textDecoration: "none" }}
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

export default App;
