import { controls } from "../data";

export default function Controls() {
  return (
    <section id="controls" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-8">{controls.title}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <svg className="mx-auto mb-3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M6 8h12M6 12h12M6 16h8" />
            </svg>
            <h3 className="font-semibold text-primary-dark mb-2">Desktop</h3>
            <p className="text-sm text-primary-light">{controls.desktop}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <svg className="mx-auto mb-3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <path d="M12 18h.01" />
            </svg>
            <h3 className="font-semibold text-primary-dark mb-2">Mobile</h3>
            <p className="text-sm text-primary-light">{controls.mobile}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
