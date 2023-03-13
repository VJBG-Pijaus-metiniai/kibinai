import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 text-yellow-600 flex justify-between items-center">
      <div>
        - Projektas padarytas remintis 2023 m. Europos statistikos konkurso
        duotomis temomis, daugiau informacijos galite rasti{' '}
        <a
          target="_blank"
          href="https://www.esc2023.eu/"
          className="underline text-yellow-500"
        >
          čia
        </a>
      </div>
      <div className="max-w-[150px] flex items-center gap-3">
        <img
          src="https://www.esc2023.eu/assets/images/logo-esc-424x214.png"
          alt="konkurso logo"
        />
      </div>
    </div>
  );
};

export default Footer;
