import { MappingComp } from '../../components/Map';

const Statistics = () => {
  const defaultCenter = [55.1694, 23.8813] as [number, number];
  const defaultZoom = 5;

  return (
    <div
      id="stats"
      className="max-w-7xl pb-[100px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-between"
    >
      <div className="md:mt-4 px-3 text-yellow-600 text-2xl flex-1 md:px-6">
        <b className="text-2xl mb-4">
          100 eurų perkamosios galios kaita per pastaruosius 5 metus
        </b>
        <br />
        <br />
        Šiame interaktyviame žemėlapyje pavaizduota 100€ perkamosios galios
        pokytis per pastaruosius 5 metus skirtingose euro zonos valstybėse.
        Šiame žemėlapyje 2019 metais 100€ yra prilyginami 100 kibinų. Bėgant
        metams skirtingose valstybėse už 100€ buvo galima nusipirkti skirtingą
        kiekį kibinų, šis kiekis yra vaizduojamas skaičiumi žemėlapyje.
        <br />
        <br /> Šis žemėlapis buvo sudarytas remiantis šiais oficialiais
        informacijos šaltiniais:
        <br />
        <a
          href="https://www.inflationtool.com/euro"
          className="text-blue-500"
          target="_blank"
        >
          https://www.inflationtool.com/euro
        </a>
        <br />
        <a
          href="https://www.worlddata.info/"
          className="text-blue-500"
          target="_blank"
        >
          https://www.worlddata.info/
        </a>
      </div>
      <div>
        <MappingComp center={defaultCenter} zoom={defaultZoom} />
      </div>
    </div>
  );
};

export default Statistics;
