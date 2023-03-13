import React from "react";

const Thoughts = () => {
  return (
    <div
      id="target"
      className="max-w-5xl py-[250px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-between"
    >
      <div className="md:mt-4 px-3 text-yellow-600 text-xl flex-1 md:px-6">
        <p className="text-3xl mb-4">Išvados:</p>
        <br />
        <br />
        <b>Prekių krepšelis</b> 1 l pieno 2017 metais kainavo 0.73€, o 2021 metais
        0.77€, jo kaina per 5 metus pakilo 5%. 2017 – 2018 metais kaina buvo ta
        pati. 2019 metais ji nukrito 1% ir 2019 – 2021 metais pakilo 7%.
        Obuoliai 2017 metais kainavo 0.65€, o 2021 metais 0.78€, jų kaina per 5
        metus pakilo 20%. 2017 – 2018 metais kaina pakilo 17%. 2018 – 2019
        metais ji nukrito 20%. 2019 – 2020 metais ji pakilo net 54%. 2020 – 2021
        metais ji nukrito 17%. 1 kg duonos 2017 metais kainavo 1.36€, o 2021
        metais 1.53€, jos kaina per 5 metus pakilo 13%. 2017 – 2021 metais
        duonos kaina kas metus vidutiniškai pakildavo 11%. <b>Paslaugos</b> 1 m3 šalto
        vandens 2017 metais kainavo 0.83€, o 2021 metais 0.81€, jo kaina per 5
        metus nukrito 2%. 2017 – 2019 metais jo kaina kas metus vidutiniškai
        nukrisdavo 3%. 2019 – 2020 metais jo kaina pakilo 3% ir liko tokia pati
        2021 metais. 1 m3 karto vandens 2017 metais kaina buvo 5.07€, o 2021
        metais 4.82€, jo kaina per 5 metus nukrito 5%. 2017 – 2020 jo kaina kas
        metus vidutiniškai nukrisdavo 7%. 2020 – 2021 metais ji pakilo 8%.
        Miesto autobuso mėnesinis bilietas 2017 metais kainavo 25.04€, o 2021
        metais 26.16€, jo kaina per 5 metus pakilo 4%. 2017 – 2021 metais
        bilieto kaina vidutiniškai pakildavo 1%. <b>Apibendrinant</b> Per 5 metus (2017
        – 2021) visų pasirinktų prekių kaina pakilo: 1 l pieno 0.73€ – 0.77€,
        Obuoliai 0.65€ – 0.78€, 1 kg duonos 1.36€ – 1.53€. labiausiai pakilo
        obuolių kaina, ji pakilo 20%, o mažiausiai pieno, ji pakilo 5%. Per tuos
        pačius 5 metus nukrito šalto ir karšto vandens kainos: šaltas vanduo
        0.83€ –0.81€, karštas vanduo 5.07€ – 4.82€. labiausiai nukrito karšto
        vandens kaina, ji nukrito 5%. Vis dėlto per 5 metus pakilo Miesto
        autobuso mėnesinio bilieto kaina 25.04€ – 26.16€, ji pakilo 4%. Lyginant
        prekių ir paslaugų kainų pokytį 2017 – 2021 metais yra matoma, kad
        prekių kaina pakilo labiau nei paslaugų.
      </div>
    </div>
  );
};

export default Thoughts;
