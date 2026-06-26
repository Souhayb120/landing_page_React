import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonias";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;