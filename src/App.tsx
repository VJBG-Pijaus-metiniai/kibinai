import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import HeroSection from './Pages/Home/HeroSection';
import Footer from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import Statistics from './Pages/Statistics/Statistics';
import { isMobileState } from './state/responsive';
import AboutUs from './Pages/About/AboutUs';

const App = () => {
  const [_, setIsMobile] = useRecoilState(isMobileState);
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

  useEffect(() => {
    if (width <= 786) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="bg-yellow-100 overflow-hidden scroll-smooth">
      <Header />
      <HeroSection />
      <Statistics />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
