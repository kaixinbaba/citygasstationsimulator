import { relatedPages } from "../data";

export default function RelatedPages() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-8">More Ways to Play</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedPages.map((page, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-md text-center opacity-60">
              <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h3 className="font-medium text-primary-dark text-sm mb-1">{page.title}</h3>
              <span className="text-xs text-primary-light bg-primary-pale px-2 py-0.5 rounded-full">Coming Soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
