import PageTitle from "../components/PageTitle.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import { posts, LIVE } from "../data/site.js";

// Posts link to the full articles on the live site.
export default function Blog() {
  return (
    <>
      <PageTitle title="Blog" />
      <section className="content-section alt">
        <div className="wrapper post-grid">
          {posts.map((post) => {
            const url = `${LIVE}/${post.slug}/`;
            const ext = { href: url, target: "_blank", rel: "noopener noreferrer" };
            return (
              <Reveal as="article" className="post-card" key={post.slug}>
                <a {...ext} className="post-thumb"><img src={`/assets/${post.image}`} alt="" loading="lazy" /></a>
                <div className="post-body">
                  <span className="post-cat">{post.category}</span>
                  <h4><a {...ext}>{post.title}</a></h4>
                  <time>{post.date}</time>
                  <p>{post.excerpt}</p>
                  <a {...ext} className="read-more">Read More <Icon name="arrow_forward" /></a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
