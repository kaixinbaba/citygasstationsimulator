import { site } from "../data";

export default function Hero() {
  return (
    <section id="play" className="pt-20 pb-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-3">{site.name}</h1>
        <p className="text-lg text-primary-light mb-6">{site.tagline}</p>
        <div
          id="game-container"
          className="relative w-full max-w-[960px] mx-auto aspect-[5/3] sm:h-[480px] rounded-xl shadow-2xl overflow-hidden bg-primary-dark"
        >
          <iframe
            src={site.cdnUrl}
            className="w-full h-full border-0"
            allowFullScreen
            allow="autoplay; gamepad"
            title={site.name}
          />
        </div>
      </div>
    </section>
  );
}
