import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import Reveal from "../components/Reveal.jsx";
import CheckList from "../components/CheckList.jsx";

const QUALIFICATIONS = [
  "Current and valid nursing license.",
  "Positive employment verification from former employers.",
  "Positive Criminal background checks and character reference.",
];

const REQUIREMENTS = [
  "Social Security card.",
  "Valid driver’s license or government-issued identification",
  "Documentation of current negative TB test (if applicable)",
  "Current First Aid & CPR Certifications and any other related certifications (if applicable)",
  "Original State or Federal photo ID",
  "Proof of employment",
  "Malpractice insurance",
  "Physical exam (performed within 6 months of application).",
  "Background Check",
];

export default function Careers() {
  return (
    <>
      <PageTitle title="Careers" />

      <section className="content-section">
        <div className="wrapper split">
          <Reveal>
            <h6 className="eyebrow">Join Us</h6>
            <h2>Become a Valued Member of Our Growing Team</h2>
            <p>Thank you for your interest in seeking employment with Quality One Care Home Health Inc. Our hiring process is as outlined below. Find out if you qualify!</p>
            <div className="btn-row">
              <Link to="/careers/application-forms" className="btn btn-primary">Application Forms</Link>
              <Link to="/careers/drug-calculation-test" className="btn btn-outline">Drug Calculation Test</Link>
            </div>
          </Reveal>
          <Reveal>
            <img src="/assets/elder-wheelchair-700x465.jpg" alt="Caregiver with an elderly patient" className="rounded-img" />
          </Reveal>
        </div>
      </section>

      <section className="content-section alt">
        <div className="wrapper card-pair">
          <Reveal className="info-card">
            <h3>Our Hiring Process</h3>
            <ol className="steps">
              <li>The first step in our new hiring process is for the applicant to fill out an employment application. Applicants will also take a written skills test. (In the event that the applicant does not pass the test, we will arrange for further training should we choose to hire the applicant.)</li>
              <li>
                To be considered for a position, applicant must meet the position’s minimum qualifications, which include having:
                <CheckList items={QUALIFICATIONS} />
              </li>
              <li>If you are being considered, a member of the Human Resources team will contact you to schedule an interview.</li>
              <li>After the interview is conducted the applicant will be contacted if approved for hire and provided an employee packet.</li>
            </ol>
          </Reveal>
          <Reveal className="info-card">
            <h3>Application Requirements</h3>
            <p>Applicants must bring all of the following when coming to apply for a job:</p>
            <CheckList items={REQUIREMENTS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
