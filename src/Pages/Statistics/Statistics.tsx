import React, { useState } from 'react';
import { MappingComp } from '../../components/Map';

export interface CountryData {
  countryName: string;
  data: {
    infliationRate: number;
    kibinCount: number;
    year: number;
  }[];
}

const Statistics = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const defaultCenter = [55.1694, 23.8813] as [number, number];
  const defaultZoom = 5;

  return (
    <div className="max-w-7xl py-5 pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-between">
      <div className="md:mt-4 text-yellow-600 text-md flex-1 md:px-6">
        <p className="text-2xl mb-4">
          Europos valstybiu infliacija pastaruosius 5 metus
        </p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
        <br />
        <p className="text-red-500 text-xl">
          ŠITA TEKSTA KEISIM Į NORMALŲ ATEJUS LAIKUI!!!
        </p>
      </div>
      <div>
        <MappingComp
          center={defaultCenter}
          zoom={defaultZoom}
          countryMarkers={countryData}
        />
      </div>
    </div>
  );
};

export default Statistics;
