import PageTitle from "../components/PageTitle.jsx";
import { DRUG_TEST_FORM } from "../data/site.js";

export default function DrugCalculationTest() {
  return (
    <>
      <PageTitle title="Drug Calculation Test" />
      <section className="content-section">
        <div className="wrapper narrow">
          <iframe className="embed-form" src={DRUG_TEST_FORM} title="Drug Calculation Test" loading="lazy" />
        </div>
      </section>
    </>
  );
}
