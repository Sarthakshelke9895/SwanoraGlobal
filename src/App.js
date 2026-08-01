import Navbar from '../src/Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FeatureStrip from './Components/FeatureStrip/FeatureStrip'
import About from './Components/About/About';
import Product from './Components/Product/Product'
import Counter from './Components/Counter/Counter';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import Process from './Components/Process/Process';
import Services from './Components/Services/Services';
import Certificates from './Components/Certificates/Certificates';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <FeatureStrip/>
      <About/>
      <Services/>
      <Product/>
      <Counter/>
      <WhyChooseUs/>
      <Process/>
      <Certificates/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    
    </>
  );
}

export default App;