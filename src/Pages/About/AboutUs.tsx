import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import padaleika from '../../components/datasets/pfp/padaleika.jpg';
import juze from '../../components/datasets/pfp/juze.jpg';
import serapinas from '../../components/datasets/pfp/serapinas.jpeg';
import { useRecoilValue } from 'recoil';
import { isMobileState } from '../../state/responsive';

const stepDataObj = [
  {
    name: 'Pijus Serapinas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat. Praesent elementum facilisis leo vel fringilla est ullamcorper. Massa enim nec dui nunc. Ornare aenean euismod elementum nisi quis eleifend. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Nibh mauris cursus mattis molestie a. Fermentum posuere urna nec tincidunt praesent. Eu facilisis sed odio morbi quis commodo odio aenean sed. Fames ac turpis egestas maecenas pharetra convallis posuere. Ac tortor vitae',
  },
  {
    name: 'Juozas Krinickis',
    description:
      'Facilisis magna etiam tempor orci eu. Feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Sit amet justo donec enim diam vulputate ut. Condimentum id venenatis a condimentum. Praesent elementum facilisis leo vel fringilla.',
  },
  {
    name: 'Pijus Padalevičius',
    description: 'Esu didžiausias durnelis šios žemės paviršiuje',
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
      className="max-w-7xl pt-[100px] pb-[50px] md:pb-[20px] px-5 md:px-0 md:pt-[150px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-center"
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
          <div>
            <img src={serapinas} alt="Pijus S." />
          </div>
          <div>
            <img src={juze} alt="Juozas" />
          </div>
          <div>
            <img src={padaleika} alt="Pijus P." />
          </div>
        </Carousel>
      </div>
      <div className="md:px-7 text-yellow-600 text-md max-w-xl">
        <p className="text-3xl mb-3">{stepData?.name}</p>
        {stepData?.description}
      </div>
    </div>
  );
};

export default AboutUs;
