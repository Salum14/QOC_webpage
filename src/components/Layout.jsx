import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

// Shared frame around every page: header, nav, the page itself, footer.
export default function Layout() {
  const { pathname } = useLocation();

  // Start each new page at the top, like a normal page load.
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
