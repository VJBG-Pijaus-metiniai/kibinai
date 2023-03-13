import React from 'react';

const Tikslas = () => {
  return (
    <div
      id="target"
      className="max-w-7xl py-[250px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-between"
    >
      <img
        className="m-3 max-w-[95%] md:max-w-lg"
        src="https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png"
        alt=""
      />
      <div className="md:mt-4 px-3 text-yellow-600 text-xl flex-1 md:px-6">
        <p className="text-3xl mb-4">
          Kainų pokyčiai: kaip keitėsi prekių ir paslaugų kainos per
          pastaruosius 5 metus?
        </p>
        <p className="text-2xl mb-2">Pagrindinis tikslas: išsiaiškinti kaip keitėsi būtiniausių maisto prekių krepšelio  ir būtiniausių paslaugų  kaina per pastaruosius 5 metus.</p>
        <br />
        Per pastaruosius 5 metus prekių ir paslaugų kainos keitėsi skirtingai
        priklausomai nuo kiekvienos prekės ar paslaugos rinkos, ekonomikos
        būklės ir kitiems veiksniams.
        <br />
        <br /> Vienas iš pagrindinių kainų kitimo veiksnių yra infliacija.
        Infliacija yra bendra kainų lygio kilimo tendencija. Tai reiškia, kad
        infliacija didina prekių ir paslaugų kainas, nes už tą patį kiekį pinigų
        galima nusipirkti mažiau prekių ar paslaugų.
        <br/>
        <ol className="list-decimal ml-5">
          <li>sužinoti kaip pasikeitė 100€ perkamoji galia per pastaruosius 5 metus euro zonai priklausančiose šalyse</li>
          <li>sudaryti būtiniausių maisto prekių sąrašą</li>
          <li>sudaryti būtiniausių paslaugų sąrašą</li>
          <li>išanalizuoti statistikos šaltinius apie pasirinktų prekių ir paslaugų kainų pokytį 2017 iki 2021 m.</li>
          <li>sudaryti duomenų lenteles apie pasirinktų prekių ir paslaugų kainų pokytį 2017 iki 2021 m.</li>
          <li>sukurti svetainę, kurioje bus pateikta informacija apie būtiniausių maisto prekių krepšelio  ir būtiniausių paslaugų  kainos pokyčius per 2017 - 2021 metus.</li>
        </ol>
      </div>
    </div>
  );
};

export default Tikslas;
