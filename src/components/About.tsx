import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark">{about.title}</h2>
        </div>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-primary-light leading-relaxed mb-4 last:mb-0">{p}</p>
        ))}
      </div>
    </section>
  );
}
