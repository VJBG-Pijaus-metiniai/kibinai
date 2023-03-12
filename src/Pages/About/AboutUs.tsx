import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import padaleika from '../../datasets/pfp/padaleika.jpg';
import juze from '../../datasets/pfp/juze.jpg';
import serapinas from '../../datasets/pfp/serapinas.jpeg';
import laura from '../../datasets/pfp/laura.png';
import { isMobileState } from '../../state/responsive';

const stepDataObj = [
  {
    name: 'Pijus Serapinas',
    description:
      'Aš esu Pijus Serapinas, atsakingas už šios svetainės development. Man yra 16 metų, dirbu part-time UAB "SpectroFinance" kaip front-end "React" programuotojas. Domiuosi programavimu jau ganėtinai ilgą laiką ir mėgstu praleisti savo laisvą laiką arba prie kompo, arba sporto salėje.',
  },
  {
    name: 'Juozas Krinickis',
    description:
      'Aš esu Juozas Krinickis man 16 metų, gyvenu Trakuose, mokausi Vilniaus Jono Basanavičiaus gimnazijoje. Mėgstu laiką leisti gamtoje, žvejoju, važinėju dviračiu, slidinėju ir einu į žygius. Šiuo metu lankau tinklinį TMC. Labiausiai patinka tikslieji mokslai: matematika, fizika. Baigęs mokyklą planuoju studijuoti mechaninę inžineriją. ',
  },
  {
    name: 'Pijus Padalevičius',
    description:
      'Aš Pijus, gyvenu Vilniuje, mokausi Vilniaus Jono Basanavičiaus gimnazijoje, mėgstu žaisti vaizdo žaidimus, sportuoti, o labiausiai mėgstu - valgyti. Esu žingeidus ir visuomeniškai aktyvus, ateityje noriu dirbti aviacijos ar energetikos srityse. ',
  },
  {
    name: 'Laura Armanavičienė',
    description: '',
  },
];

const AboutUs = () => {
  const isMobile = useRecoilValue(isMobileState);
  const [step, setStep] = useState(0);
  const [stepData, setStepData] = useState<{
    name: string;
    description: string;
  }>();

  useEffect(() => {
    setStepData(stepDataObj[step]);
  }, [step]);

  return (
    <div
      id="about"
      className="max-w-7xl pt-[100px] pb-[50px] md:pb-[100px] px-5 md:px-0 md:pt-[150px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-center"
    >
      <div className="mb-4 md:mb-0">
        <Carousel
          width={isMobile ? window.innerWidth - 30 : undefined}
          autoPlay={true}
          dynamicHeight={true}
          infiniteLoop={true}
          onChange={(e) => setStep(e)}
          showStatus={false}
          selectedItem={step}
        >
          <img src={serapinas} alt="Pijus S." />
          <img src={juze} alt="Juozas" />
          <img src={padaleika} alt="Pijus P." />
          <img src={laura} alt="Laura. A" />
        </Carousel>
      </div>
      <div className="md:px-7 text-yellow-600 text-xl max-w-xl">
        <p className="text-3xl mb-3">{stepData?.name}</p>
        {stepData?.description}
      </div>
    </div>
  );
};

export default AboutUs;
