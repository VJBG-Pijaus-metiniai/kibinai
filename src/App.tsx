import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import HeroSection from './Pages/Home/HeroSection';
import Footer from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import Statistics from './Pages/Statistics/Statistics';
import { isMobileState } from './state/responsive';
import Tikslas from './Pages/Tikslas/Tikslas';
import AboutTeam from './Pages/About/AboutTeam';
import Pirkiniai from './Pages/Pirkiniai/Pirkiniai';
import Paslaugos from './Pages/Paslaugos/Paslaugos';
import Thoughts from './Pages/Thoughts/Thoughts';

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
      <AboutTeam />
      <Tikslas />
      <Statistics />
      <Pirkiniai />
      <Paslaugos />
      <Thoughts />
      <Footer />
    </div>
  );
};

export default App;
