import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const stepDataObj = [
  {
    name: 'Pijus Serapinas',
    description:
      "The one who developed the app you're looking at... A 16 year old proffesional Front-end React developer, working at SpectroFinance of the time making this project into reality",
  },
  {
    name: 'Juozas Krinickis',
    description:
      'Loves fishing and climbing trees in Trakai, Lithuania... Helped with researching the current state of inflation in the European Union',
  },
];

const AboutUs = () => {
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
      className="max-w-7xl pb-7 pt-[150px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-center"
    >
      <div>
        <Carousel
          autoPlay={true}
          dynamicHeight={true}
          infiniteLoop={true}
          onChange={(e) => setStep(e)}
          showStatus={false}
          selectedItem={step}
        >
          <div>
            <img src="https://scontent.fvno2-1.fna.fbcdn.net/v/t39.30808-6/294944667_1760321254320393_742224564036456557_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZAgW8eU03kcAX9BeIFj&_nc_ht=scontent.fvno2-1.fna&oh=00_AfCP6Y6vCTU9L_u__ViMdDlIdReSqg8FWFWkjme5ia8ApQ&oe=63F1B3C5" />
          </div>
          <div>
            <img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/209029083_2925958987661393_6792947707676647040_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fvno2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=74TcVpzZeSoAX_um2Cp&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjYwOTc2ODYwNDY4NDQyMzE0Mg%3D%3D.2-ccb7-5&oh=00_AfDMIHdOfb7fqksOu2NRguZWj7vR0xXQm5VfgDb8w8ibPQ&oe=63F1A4CE&_nc_sid=1527a3" />
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
