import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import Sidebar from "../components/Sidebar.jsx";
import CheckList from "../components/CheckList.jsx";
import { getService } from "../data/services.js";
import NotFound from "./NotFound.jsx";

// One template for all eight service pages; the content comes from data/services.js.
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;

  return (
    <>
      <PageTitle title={service.name} />
      <section className="content-section">
        <div className="wrapper with-sidebar">
          <article className="prose">
            <img src={`/assets/${service.image}`} alt={service.name} className="feature-img" />
            {service.body.map((block, i) => {
              if (block.type === "heading") return <h3 key={i}>{block.text}</h3>;
              if (block.type === "list") return <CheckList key={i} items={block.items} twoCol={block.twoCol} />;
              return <p key={i}>{block.text}</p>;
            })}
          </article>
          <Sidebar current={slug} />
        </div>
      </section>
    </>
  );
}
