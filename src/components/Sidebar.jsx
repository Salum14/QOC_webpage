import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import ContactList from "./ContactList.jsx";
import Icon from "./Icon.jsx";

export default function Sidebar({ current }) {
  return (
    <aside className="sidebar">
      <div className="side-box">
        <h4>Services</h4>
        <ul className="side-links">
          {services.map((s) => (
            <li key={s.slug} className={s.slug === current ? "current" : undefined}>
              <Link to={`/services/${s.slug}`}>{s.name}<Icon name="arrow_forward" /></Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-box">
        <h4>Contact Details</h4>
        <ContactList />
      </div>
    </aside>
  );
}
