import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Careers from "./pages/Careers.jsx";
import ApplicationForms from "./pages/ApplicationForms.jsx";
import DrugCalculationTest from "./pages/DrugCalculationTest.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="careers" element={<Careers />} />
        <Route path="careers/application-forms" element={<ApplicationForms />} />
        <Route path="careers/drug-calculation-test" element={<DrugCalculationTest />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
