import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon.jsx";

const SLIDES = [
  { image: "/assets/older-couple-header.jpg", text: "Comfort and care delivered to your doorstep." },
  { image: "/assets/practitioner-copyright.jpg", text: "Exceptional care, built on trust and compassion." },
];

// Auto-advances every 6 seconds; using an arrow restarts the timer.
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0);

  const go = useCallback((step) => {
    setCurrent((c) => (c + step + SLIDES.length) % SLIDES.length);
    setTick((t) => t + 1);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, [tick]);

  return (
    <section className="hero">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={`slide ${i === current ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== current}
        >
          <div className="wrapper"><div className="slide-text">{slide.text}</div></div>
        </div>
      ))}
      <div className="wrapper hero-arrows">
        <button className="arrow prev" aria-label="Previous slide" onClick={() => go(-1)}><Icon name="arrow_back" /></button>
        <button className="arrow next" aria-label="Next slide" onClick={() => go(1)}><Icon name="arrow_forward" /></button>
      </div>
    </section>
  );
}
