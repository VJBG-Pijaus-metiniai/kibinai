import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isMobileState } from '../../state/responsive';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {
  const isMobile = useRecoilValue(isMobileState);
  const [isDropped, setIsDropped] = useState(false);

  return (
    <div className="fixed top-0 w-screen z-10 bg-yellow-100">
      <div className="py-3 px-5 text-2xl md:py-5 md:px-8 flex justify-between md:text-xl text-yellow-600 max-w-5xl mx-auto">
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
        </div>
        <div>
          <div>KIBINAI logo</div>
        </div>
      </div>
    </div>
  );
};
