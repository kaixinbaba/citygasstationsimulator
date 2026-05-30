import { site } from "../data";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-pale">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-bold text-lg text-primary-dark hover:text-primary transition-colors">
          {site.name}
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#play" className="text-primary-dark hover:text-accent transition-colors">Play</a>
          <a href="#how-to-play" className="text-primary-dark hover:text-accent transition-colors">How to Play</a>
          <a href="#faq" className="text-primary-dark hover:text-accent transition-colors">FAQ</a>
        </nav>
        <button className="sm:hidden text-primary-dark" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
