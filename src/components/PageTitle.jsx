import { useEffect } from "react";
import Icon from "./Icon.jsx";

// Dark banner at the top of every inner page. Also sets the browser tab title.
export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = `${title} – Quality One Care Home Health, Inc`;
  }, [title]);

  return (
    <section className="page-title">
      <div className="wrapper">
        <h1>{title}</h1>
        <Icon name="expand_more" />
      </div>
    </section>
  );
}
