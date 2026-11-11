import { Link } from "react-router-dom";
import { contact, PORTAL_URL } from "../data/site.js";
import Icon from "./Icon.jsx";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrapper header-inner">
        <Link to="/" className="logo">
          <img src="/assets/qoc-logo.svg" alt="Quality One Care Home Health Inc. — We Care with Golden Hands." />
        </Link>
        <div className="header-actions">
          <a href={contact.phoneHref} className="btn btn-phone">
            <Icon name="call" />{contact.phone}
          </a>
          <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="account_circle" />Access Patient Portal
          </a>
        </div>
      </div>
    </header>
  );
}
