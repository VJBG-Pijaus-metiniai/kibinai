import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const HeroSection = () => {
  const globeEl = useRef<any>();
  const N = 100;

  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 400,
    startLng: (Math.random() - 0.5) * 500,
    endLat: (Math.random() - 0.5) * 400,
    endLng: (Math.random() - 0.5) * 500,
    color: [
      ['#ea580c', '#9a3412', '#ef4444', '#7c2d12'][
        Math.round(Math.random() * 3)
      ],
      ['#ea580c', '#9a3412', '#ef4444', '#7c2d12'][
        Math.round(Math.random() * 3)
      ],
    ],
  }));

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.7;
  }, []);

  return (
    <div
      id="home"
      className="items-center flex flex-col md:flex-row px-3 pt-[25%] md:pt-0 w-screen overflow-hidden md:px-10"
    >
      <div className="text-center min-w-xl text-4xl text-yellow-600 md:ml-[8%] z-10 relative">
        KIBINAI
        <br />
        VJBG 2023 m. Europos statistikos konkursas
        <br />
        Balsuokit už mus{' '}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="underline cursor-pointer text-yellow-500"
        >
          čia
        </a>
      </div>
      <div className="max-w-lg">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          arcsData={arcsData}
          backgroundColor="rgba(0, 0, 0, 0)"
          arcColor={'color'}
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcDashAnimateTime={() => Math.random() * 4000 + 500}
        />
      </div>
    </div>
  );
};

export default HeroSection;
