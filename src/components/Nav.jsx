import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getService } from "../data/services.js";
import { resources } from "../data/site.js";
import Icon from "./Icon.jsx";

const svc = (slug) => ({ label: getService(slug).name, to: `/services/${slug}` });

// The menu, top to bottom. `match` decides when a top-level item is highlighted.
const MENU = [
  { label: "Home", to: "/", match: (p) => p === "/" },
  { label: "About Us", to: "/about-us", match: (p) => p === "/about-us" },
  {
    label: "Services", to: "/services", match: (p) => p.startsWith("/services"),
    children: [
      svc("adult-care"), svc("home-infusion"), svc("hospice"), svc("pediatric-care"),
      { label: "Therapy Services", children: [svc("physical-therapy"), svc("occupational-therapy"), svc("speech-therapy")] },
      svc("skilled-nursing-visits"),
    ],
  },
  {
    label: "Careers", to: "/careers", match: (p) => p.startsWith("/careers"),
    children: [
      { label: "Application Forms", to: "/careers/application-forms" },
      { label: "Drug Calculation Test", to: "/careers/drug-calculation-test" },
    ],
  },
  { label: "Resources", children: resources.map((r) => ({ label: r.label, href: r.href })) },
  { label: "Our Blog", to: "/blog", match: (p) => p === "/blog" },
  { label: "Contact Us", to: "/contact-us", match: (p) => p === "/contact-us" },
];

const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

function MenuLink({ item, caret, onToggle }) {
  const content = (
    <>
      {item.label}
      {caret && <Icon name={caret} className="caret" />}
    </>
  );
  // On phones, tapping a parent item opens its submenu instead of navigating.
  const handleClick = (e) => {
    if (item.children && isMobile()) {
      e.preventDefault();
      onToggle();
    }
  };
  if (item.href) {
    const external = item.href.startsWith("http");
    return (
      <a href={item.href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} onClick={handleClick}>
        {content}
      </a>
    );
  }
  return (
    <Link to={item.to ?? "#"} onClick={handleClick}>
      {content}
    </Link>
  );
}

function MenuItem({ item, depth, pathname }) {
  const [expanded, setExpanded] = useState(false);
  const classes = [
    item.children && "has-sub",
    item.match?.(pathname) && "active",
    expanded && "expanded",
  ].filter(Boolean).join(" ");

  return (
    <li className={classes || undefined}>
      <MenuLink
        item={item}
        caret={item.children ? (depth === 0 ? "expand_more" : "chevron_right") : null}
        onToggle={() => setExpanded((v) => !v)}
      />
      {item.children && (
        <ul className="sub-menu">
          {item.children.map((child) => (
            <MenuItem key={child.label} item={child} depth={depth + 1} pathname={pathname} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  // The mobile menu stays open only on the page where it was opened,
  // so navigating to another page closes it.
  const [openOn, setOpenOn] = useState(null);
  const menuOpen = openOn === pathname;
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInput = useRef(null);

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus();
  }, [searchOpen]);

  return (
    <nav className="main-nav">
      <div className="wrapper nav-inner">
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setOpenOn(menuOpen ? null : pathname)}
        >
          <Icon name="menu" />MENU
        </button>
        <ul className={`menu ${menuOpen ? "open" : ""}`} id="menu">
          {MENU.map((item) => (
            <MenuItem key={item.label} item={item} depth={0} pathname={pathname} />
          ))}
        </ul>
        <form className={`search ${searchOpen ? "open" : ""}`} role="search" onSubmit={(e) => e.preventDefault()}>
          <input ref={searchInput} type="search" placeholder="Search…" aria-label="Search" />
          <button type="button" className="search-toggle" aria-label="Search" onClick={() => setSearchOpen((v) => !v)}>
            <Icon name="search" />
          </button>
        </form>
      </div>
    </nav>
  );
}
