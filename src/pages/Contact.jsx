import { useState } from "react";
import PageTitle from "../components/PageTitle.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactList from "../components/ContactList.jsx";
import { services } from "../data/services.js";
import { contact } from "../data/site.js";

const REASONS = ["New Client", ...services.map((s) => s.name), "Make a Complaint"];
const EMPTY = { first: "", last: "", email: "", phone: "", reach: "", reason: "", details: "" };
const REQUIRED = ["first", "last", "email", "phone", "reach", "reason"];

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [invalid, setInvalid] = useState([]);
  const [note, setNote] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const cls = (name) => (invalid.includes(name) ? "invalid" : undefined);

  // Validates only: this form isn't connected to a server yet.
  const submit = (e) => {
    e.preventDefault();
    const missing = REQUIRED.filter((k) => !form[k].trim());
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) missing.push("email");
    setInvalid(missing);
    if (missing.length) {
      setNote("Please fill in all required fields.");
      return;
    }
    setNote(`Thanks! This form is not connected to a server yet, so nothing was sent. Please call ${contact.phone}.`);
    setForm(EMPTY);
  };

  return (
    <>
      <PageTitle title="Contact Us" />
      <section className="content-section">
        <div className="wrapper contact-grid">
          <Reveal>
            <h6 className="eyebrow">Contact Us</h6>
            <h2>Have questions? Get in touch!</h2>
            <ContactList />
            <iframe
              className="map"
              title="Office location"
              loading="lazy"
              src="https://www.google.com/maps?q=9221+Colesville+Road,+Silver+Spring,+MD+20910&output=embed"
            />
          </Reveal>

          <Reveal as="form" className="contact-form" noValidate onSubmit={submit}>
            <fieldset className="row-2">
              <legend>Name <span className="req">*</span></legend>
              <input type="text" name="first" placeholder="First" value={form.first} onChange={update} className={cls("first")} />
              <input type="text" name="last" placeholder="Last" value={form.last} onChange={update} className={cls("last")} />
            </fieldset>
            <label>Email <span className="req">*</span>
              <input type="email" name="email" value={form.email} onChange={update} className={cls("email")} />
            </label>
            <label>Phone <span className="req">*</span>
              <input type="tel" name="phone" value={form.phone} onChange={update} className={cls("phone")} />
            </label>
            <fieldset>
              <legend>Preferred Way to Reach You <span className="req">*</span></legend>
              <div className="radios">
                {["Phone", "Email", "Either"].map((opt) => (
                  <label key={opt}>
                    <input type="radio" name="reach" value={opt} checked={form.reach === opt} onChange={update} /> {opt}
                  </label>
                ))}
              </div>
            </fieldset>
            <label>Reason for contacting us <span className="req">*</span>
              <select name="reason" value={form.reason} onChange={update} className={cls("reason")}>
                <option value="">Select a reason</option>
                {REASONS.map((r) => <option key={r}>{r}</option>)}
              </select>
            </label>
            <label>Please provide any additional details below:
              <textarea name="details" rows={5} value={form.details} onChange={update} />
            </label>
            <button type="submit" className="btn btn-primary">Submit</button>
            {note && <p className="form-note">{note}</p>}
          </Reveal>
        </div>
      </section>
    </>
  );
}
