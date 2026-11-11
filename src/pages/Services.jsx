import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <>
      <PageTitle title="Services" />

      <section className="content-section">
        <div className="wrapper split">
          <Reveal>
            <h6 className="eyebrow">Our Services</h6>
            <h2>We provide quality health care for our clients.</h2>
          </Reveal>
          <Reveal>
            <p>Our team of registered and licensed nurses and therapists specialize in wound care, medication management, vital signs and cardiac monitoring, physical and occupational therapy, bedside care, companionship, house cleaning, and much more.</p>
            <p>Best-in-class home care with an emphasis on compassion is our motivator. Our patients are the reason why we do what we do.</p>
          </Reveal>
        </div>
      </section>

      <section className="content-section alt">
        <div className="wrapper tile-grid">
          {services.map((s) => (
            <Reveal as={Link} to={`/services/${s.slug}`} className="service-tile" key={s.slug}>
              <img src={`/assets/${s.icon}`} alt="" />
              <h5>{s.name}</h5>
              <p>{s.summary}</p>
              <span className="card-link"><Icon name="arrow_forward" /></span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
