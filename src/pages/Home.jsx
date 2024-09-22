import { Helmet } from "react-helmet";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import About from "../components/home/about/About";
import Demo from "../components/home/demo/Demo";
import Contact from "../components/home/contact/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <Hero />
      <Services />
      <About />
      <Demo />
      <Contact />
    </>
  );
};

export default Home;
