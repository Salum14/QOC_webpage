import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";

export default function NotFound() {
  return (
    <>
      <PageTitle title="Page Not Found" />
      <section className="content-section">
        <div className="wrapper narrow center-text">
          <p>Sorry, we couldn’t find that page.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </>
  );
}
