import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isMobileState } from '../../state/responsive';
import { GiHamburgerMenu } from 'react-icons/gi';
import kibinLogo from '../../images/kibinas.svg';

export const Header = () => {
  const isMobile = useRecoilValue(isMobileState);
  const [isDropped, setIsDropped] = useState(false);

  return (
    <div className="fixed top-0 w-screen z-50 bg-yellow-100">
      <div className="py-2 px-5 text-2xl md:py-3 md:px-8 flex justify-between md:text-xl text-yellow-600 max-w-5xl mx-auto">
        <div className="list-none flex items-center gap-6">
          {isMobile ? (
            <GiHamburgerMenu onClick={() => setIsDropped(!isDropped)} />
          ) : (
            <>
              <a href="#home" className="cursor-pointer">
                Pagrindinis
              </a>
              <a href="#stats" className="cursor-pointer">
                Statistika
              </a>
              <a href="#about" className="cursor-pointer">
                Apie komanda
              </a>
            </>
          )}
          {isDropped && (
            <div className="absolute top-10 left-5 p-3 flex gap-3 flex-col text-center bg-yellow-200 rounded-lg">
              <a
                href="#home"
                onClick={() => setIsDropped(false)}
                className="cursor-pointer"
              >
                Pagrindinis
              </a>
              <a
                href="#stats"
                onClick={() => setIsDropped(false)}
                className="cursor-pointer"
              >
                Statistika
              </a>
              <a
                href="#about"
                onClick={() => setIsDropped(false)}
                className="cursor-pointer"
              >
                Apie komanda
              </a>
            </div>
          )}
        </div>
        <div>
          <div className="max-w-[50px]">
            <img src={kibinLogo} alt="Kibinu komandos logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
