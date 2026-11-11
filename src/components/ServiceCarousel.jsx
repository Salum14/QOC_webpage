import { useRef } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import Icon from "./Icon.jsx";

// Home-page carousel order (matches the live site).
const ORDER = [
  "skilled-nursing-visits", "speech-therapy", "occupational-therapy", "physical-therapy",
  "adult-care", "hospice", "home-infusion", "pediatric-care",
];

export default function ServiceCarousel() {
  const track = useRef(null);
  const scroll = (dir) => {
    const card = track.current.querySelector(".service-card");
    track.current.scrollBy({ left: dir * (card.offsetWidth + 24) });
  };
  const ordered = ORDER.map((slug) => services.find((s) => s.slug === slug));

  return (
    <section className="services">
      <div className="wrapper">
        <div className="services-head">
          <div>
            <h6 className="eyebrow">Services</h6>
            <h2>Best-in-class home care with an emphasis on compassion is our motivator. Our patients are the reason why we do what we do.</h2>
          </div>
          <div className="carousel-arrows">
            <button className="arrow prev" aria-label="Previous services" onClick={() => scroll(-1)}><Icon name="arrow_back" /></button>
            <button className="arrow next" aria-label="Next services" onClick={() => scroll(1)}><Icon name="arrow_forward" /></button>
          </div>
        </div>
        <div className="service-track" ref={track}>
          {ordered.map((s) => (
            <article className="service-card" key={s.slug}>
              <img src={`/assets/${s.icon}`} alt="" />
              <h3>{s.name}</h3>
              <p>{s.summary}</p>
              <Link to={`/services/${s.slug}`} className="card-link" aria-label={s.name}><Icon name="arrow_forward" /></Link>
            </article>
          ))}
        </div>
        <div className="center"><Link to="/services" className="btn btn-primary">View Our Services</Link></div>
      </div>
    </section>
  );
}
