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
            <img src="https://scontent.fvno2-1.fna.fbcdn.net/v/t39.30808-6/308612058_1276985906378405_251425496074985451_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_QarTOQCiZ4AX_3muxJ&_nc_ht=scontent.fvno2-1.fna&oh=00_AfAQ1bgwXbBhGkCxsk2-gBXOnQmbhsBoyIyNFcPi4uNYQQ&oe=63F1873E" />
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
