import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider.jsx";
import ServiceCarousel from "../components/ServiceCarousel.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  useEffect(() => {
    document.title = "Quality One Care Home Health, Inc";
  }, []);

  return (
    <>
      <HeroSlider />

      <section className="welcome">
        <div className="wrapper split">
          <Reveal className="welcome-media">
            <img src="/assets/boy-with-dsblty-700x467.jpg" alt="Caregiver with a young patient" />
            <img src="/assets/qc-icon.svg" alt="" className="badge" />
          </Reveal>
          <Reveal className="welcome-text">
            <h6 className="eyebrow">Welcome</h6>
            <h2>First Step Toward Better Living</h2>
            <p>Our network consists of registered and licensed nurses, therapists, and aides committed to delivering the quality care our patients deserve in the areas of skilled nursing, speech therapy, adult care, hospice care, and more!</p>
            <div className="btn-row">
              <Link to="/about-us" className="btn btn-primary">About Us</Link>
              <Link to="/services" className="btn btn-outline">Services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceCarousel />

      <section className="quality">
        <div className="wrapper split">
          <Reveal className="quality-text">
            <h6 className="eyebrow">Quality One Care</h6>
            <h2>We Deliver Quality Caregiving Services</h2>
            <p>At Quality One Care, empathic care is a top priority. We care about the patient and their well-being. Our work in the field is driven by our passion and compassion for our patients.</p>
            <p>Quality One Care provides the highest coordinated team approach home health care service, elevating the quality of life, creating a comfortable environment, consistency and normalcy for our patients and their families.</p>
            <Link to="/services" className="btn btn-primary">What We Offer</Link>
          </Reveal>
          <Reveal className="quality-media">
            <img src="/assets/elder-wheelchair-700x465.jpg" alt="Caregiver assisting an elderly patient in a wheelchair" className="img-a" />
            <img src="/assets/speech-therapy-700x466.jpg" alt="Speech therapy session" className="img-b" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
