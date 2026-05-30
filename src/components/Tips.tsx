import { tips } from "../data";

export default function Tips() {
  return (
    <section id="tips" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-8">{tips.title}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {tips.items.map((tip, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-md flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <p className="text-sm text-primary-light">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
