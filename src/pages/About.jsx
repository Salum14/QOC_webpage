import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";

export default function About() {
  return (
    <>
      <PageTitle title="About Us" />

      <section className="content-section">
        <div className="wrapper split">
          <Reveal>
            <h6 className="eyebrow">Who We Are</h6>
            <h2>We are a modern diagnostic and treatment center that provides top quality care for every person.</h2>
            <p>When we first started <strong>Quality One Care</strong>, our goal was to provide home care to all residents of the state of Maryland – pediatrics and adult. However, our long term goal was to specialize in pediatric care. It took us three years to obtain our residential service agency license. The main challenge we had at that moment was hiring the right staff and funding. To achieve these goals, while waiting to receive our Medicaid License, QOC started subcontracting to other private home health care companies. These allowed us to operate on a smaller scale with lower overhead costs, whilst still managing to serve with premium quality. By the time we acquired our Medicaid license, we had managed to grow our team of staff members, including, RNs and LPNs. We are proud to say that since we acquired our Medicaid license, we have expanded not only our staff but also our services.</p>
          </Reveal>
          <Reveal className="welcome-media">
            <img src="/assets/home-infusion-700x467.jpg" alt="Nurse caring for a patient at home" />
            <img src="/assets/qc-icon.svg" alt="" className="badge" />
          </Reveal>
        </div>
      </section>

      <section className="content-section alt">
        <div className="wrapper card-pair">
          <Reveal className="info-card">
            <Icon name="health_and_safety" className="big-icon" />
            <h2>Top Quality Treatment Options</h2>
            <p>Our aim is to provide the highest coordinated team approach home health care services to our patients as well as providing a safe home life with comfort, independence, and dignity. In doing so, we would be improving on the quality of their lives while exceeding expectations.</p>
            <Link to="/contact-us" className="btn btn-primary">Contact Us</Link>
          </Reveal>
          <Reveal className="info-card dark">
            <Icon name="groups" className="big-icon" />
            <h2>Qualified Service Staff</h2>
            <p>Our Goal is to provide our patients with the highest quality home health services while allowing patients and family members to be involved in establishing, implementing, and evaluating the plan of care. Our main objective is to elevate the quality of life of those we serve, and create an environment of comforts, consistency and normalcy for the patients and family members.</p>
            <Link to="/contact-us" className="btn btn-primary">Make an Appointment</Link>
          </Reveal>
        </div>
      </section>

      <section className="content-section">
        <Reveal className="wrapper narrow center-text">
          <h3 className="section-h">What Makes Quality One Care Unique</h3>
          <p>Beneath our clinical expertise lies the real ingredients to our success, which comprise of team work, compassion, respect and dedication. We recognize that a successful transition of patients from hospital to their homes require special care and attention, for the patient as well as their family members. For QOC, this means that we must be familiar with the needs of family members, physicians, discharge planners, pharmacists and medical equipment vendors, in order to serve them effectively. While our team members have their areas of expertise, we each consider ourselves advocate for every patient in our care.</p>
        </Reveal>
      </section>
    </>
  );
}
