import { contact } from "../data/site.js";
import Icon from "./Icon.jsx";

export default function ContactList() {
  return (
    <ul className="contact-list">
      <li><Icon name="location_on" />{contact.street}, {contact.city}</li>
      <li><Icon name="call" /><a href={contact.phoneHref}>{contact.phone}</a></li>
      <li><Icon name="fax" />{contact.fax}</li>
      <li><Icon name="mail" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
      <li><Icon name="schedule" />{contact.hours}</li>
    </ul>
  );
}
