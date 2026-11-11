import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import Icon from "../components/Icon.jsx";
import { downloads, JOB_PORTAL_URL, LIVE } from "../data/site.js";

export default function ApplicationForms() {
  return (
    <>
      <PageTitle title="Application Forms" />
      <section className="content-section">
        <div className="wrapper narrow">
          <h3 className="section-h">Employment Application Forms</h3>
          <p>You have the option to fill the application form online via <strong>link A</strong>, or download and fill out the application form via <strong>link B</strong>.</p>
          <a href={JOB_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="open_in_new" />A — Link to Online Application Form
          </a>

          <h4 className="list-h">B — Download Forms</h4>
          <ul className="download-list">
            {downloads.map((d) => (
              <li key={d.id}>
                <a href={`${LIVE}/download/${d.id}/`} target="_blank" rel="noopener noreferrer">
                  <Icon name="description" />{d.label}<span className="dl-tag">Download</span>
                </a>
              </li>
            ))}
            <li>
              <Link to="/careers/drug-calculation-test">
                <Icon name="calculate" />Drug Calculation Form<span className="dl-tag">Take test</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
