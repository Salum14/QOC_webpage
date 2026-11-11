import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import { contact } from "../data/site.js";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper blocks">
        <div className="block">
          <Link to="/"><img src="/assets/qoc-logo.svg" alt="Quality One Care" className="footer-logo" /></Link>
        </div>
        <div className="block">
          <h4>Office</h4>
          <p>{contact.street},<br />{contact.city}</p>
          <p>Phone: <a href={contact.phoneHref}>{contact.phone}</a><br />Fax: {contact.fax}</p>
        </div>
        <div className="block">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="block">
          <img src="/assets/acc-tjc.png" alt="Accreditation seals" className="creds" />
        </div>
      </div>
      <div className="footer-text">
        <div className="wrapper">
          Quality One Care Home Health, Inc &copy; {YEAR}. All rights reserved |{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a> |{" "}
          <a href="#">Notice of Privacy Practices (HIPAA)</a>
        </div>
      </div>
    </footer>
  );
}
