import Header from "./components/Header";
import Hero from "./components/Hero";
import FullscreenButton from "./components/FullscreenButton";
import About from "./components/About";
import HowToPlay from "./components/HowToPlay";
import Controls from "./components/Controls";
import Tips from "./components/Tips";
import FAQ from "./components/FAQ";
import RelatedPages from "./components/RelatedPages";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FullscreenButton />
        <About />
        <HowToPlay />
        <Controls />
        <Tips />
        <FAQ />
        <RelatedPages />
      </main>
      <Footer />
    </>
  );
}
