import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Pages/Hero';
import OurSolutions from './Pages/OurSolutions';
import Introduction from './Pages/Introduction';
import ChooseUs from './Pages/ChooseUs';
import ContactUs from './Pages/ContactUs';
import Faq from './Pages/Faq';
import Footer from './Components/Footer/Footer';
import Testimonials from './Pages/Testimonials';

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="our-solutions">
        <OurSolutions />
      </div>
      <div id="introduction">
        <Introduction />
      </div>
      <div id="why-choose-us">
        <ChooseUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <Faq />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
}

export default App;
