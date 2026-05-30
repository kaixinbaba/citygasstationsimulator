import { howToPlay } from "../data";

export default function HowToPlay() {
  return (
    <section id="how-to-play" className="py-12 px-4 bg-primary-pale/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-8">{howToPlay.title}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {howToPlay.steps.map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-6 shadow-md flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark mb-1">{s.title}</h3>
                <p className="text-sm text-primary-light">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
