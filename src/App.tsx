import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Retreats from './components/Retreats';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Team from './components/Team';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Retreats />
      <Testimonials />
      <Gallery />
      <Team />
      <BookingForm />
      <Footer />
    </>
  );
}
