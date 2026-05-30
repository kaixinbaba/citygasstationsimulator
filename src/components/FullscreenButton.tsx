export default function FullscreenButton() {
  const handleFullscreen = () => {
    try {
      const el = document.getElementById("game-container");
      if (el?.requestFullscreen) {
        el.requestFullscreen();
      }
    } catch {}
  };

  return (
    <div className="text-center py-4">
      <button
        onClick={handleFullscreen}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
        Play Fullscreen
      </button>
    </div>
  );
}
