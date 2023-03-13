import React from "react";

const AboutTeam = () => {
  return (
    <div
      id="about"
      className="max-w-5xl text-center py-[250px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-between"
    >
      <div className="md:mt-4 px-3 text-yellow-600 text-xl flex-1 md:px-6">
        <p className="text-3xl mb-4 font-bold">
          Vilniaus Jono Basanavičiaus gimnazijos komanda "Kibinai" (komandos
          kategorija - B).
        </p>
        <br />
        <br />
        <b>
          2023 m. Europos statistikos konkurso nacionalinio etapo II-oji
          užduotis (pristatymas)
        </b>
        <br />
        Pavadinimą "Kibinai" pasirinkome įkvėpti tradicinio karaimų patiekalo -
        kibino, dabar tapusio ir visos Lietuvos kulinariniu paveldu. Šis
        patiekalas parodo Lietuvos žmonių toleranciją ir atvirumą kitoms
        kultūroms bei papročiams. Kiekvienas kibinas turi savotiškos paslapties
        - išorėje jie visi vienodi, tačiau vidus gali labai skirtis.
      </div>
    </div>
  );
};

export default AboutTeam;
