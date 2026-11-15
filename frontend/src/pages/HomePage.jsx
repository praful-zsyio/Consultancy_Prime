import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Industries from '../components/Industries';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Industries />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}

