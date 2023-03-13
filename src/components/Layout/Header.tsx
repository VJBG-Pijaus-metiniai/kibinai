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
              <a
                href="#home"
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Pagrindinis
              </a>
              <a
                href="#target"
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Tikslas
              </a>
              <a
                href="#stats"
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Statistika
              </a>
              <a
                href="#result"
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Išvados
              </a>
              <a
                href="#about"
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Apie komanda
              </a>
              <a
                href="https://github.com/VJBG-Pijaus-metiniai/kibinai"
                target="_blank"
              >
                <img
                  className="max-w-[43px] cursor-pointer hover:shadow-lg p-1 rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                  alt="Github logo"
                />
              </a>
            </>
          )}
          {isDropped && (
            <div className="absolute top-10 left-5 p-3 flex gap-3 flex-col text-center bg-yellow-200 rounded-lg">
              <a
                href="#home"
                onClick={() => setIsDropped(false)}
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Pagrindinis
              </a>
              <a
                href="#target"
                onClick={() => setIsDropped(false)}
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Tikslas
              </a>
              <a
                href="#stats"
                onClick={() => setIsDropped(false)}
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Statistika
              </a>
              <a
                href="#result"
                onClick={() => setIsDropped(false)}
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Išvados
              </a>
              <a
                href="#about"
                onClick={() => setIsDropped(false)}
                className="cursor-pointer p-1 rounded-md hover:shadow-lg"
              >
                Apie komanda
              </a>
              <a
                href="https://github.com/VJBG-Pijaus-metiniai/kibinai"
                target="_blank"
              >
                <img
                  className="max-w-[43px] mx-auto cursor-pointer hover:shadow-lg p-1 rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                  alt="Github logo"
                />
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
