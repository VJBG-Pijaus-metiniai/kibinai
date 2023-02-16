import React, { useEffect, useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import ReactSlider from 'react-slider';
import { useRecoilValue } from 'recoil';
import { isMobileState } from '../state/responsive';
import countryCoords from '../components/datasets/coords.json';
import inflationRateE from '../components/datasets/inflation.json';

const inflationRate = inflationRateE as any;

interface MapProps {
  center: [number, number];
  zoom: number;
}

interface CountryData {
  countryName: string;
  lat: number;
  lng: number;
  data: number[];
}

export const MappingComp: React.FC<MapProps> = ({ center, zoom }) => {
  const [year, setYear] = useState(0);
  const isMobile = useRecoilValue(isMobileState);
  const [countryData, setCountryData] = useState<CountryData[]>([]);

  useEffect(() => {
    const result: CountryData[] = [];
    countryCoords.map((coord) => {
      if (inflationRate[coord['country']]) {
        result.push({
          countryName: coord.country,
          lat: coord['latitude'],
          lng: coord['longitude'],
          data: inflationRate[coord['country']],
        });
      }
    });

    setCountryData(result);
  }, []);

  return (
    <div className="z-20 mt-3 md:mt-0 relative">
      <Map
        width={isMobile ? window.innerWidth - 30 : 650}
        height={isMobile ? 300 : 500}
        minZoom={4}
        center={center}
        zoom={zoom}
      >
        <ZoomControl />
        {countryData.map((country) => {
          return (
            <Marker anchor={[country.lat, country.lng]} width={25}>
              <div className="bg-yellow-200 p-1 gap-2 rounded-xl text-yellow-600 flex items-center">
                {country.data[year]} x
                <img
                  width="30px"
                  src="https://mokslininku.lt/wp-content/uploads/2020/03/product-kibinas.png"
                  alt="Kibinas"
                />
              </div>
            </Marker>
          );
        })}
      </Map>
      <div className="absolute bottom-0 left-0 z-50">
        <p className="p-2 bg-yellow-100 mx-2 mb-4 text-yellow-500 w-[100px] text-center rounded-xl">
          {year + 2019}
        </p>
        <ReactSlider
          className="m-auto m-w-full"
          trackClassName="top-[8px] h-[4px] bg-yellow-300 customSlider-track"
          thumbClassName="cursor-pointer bg-yellow-600 w-[20px] h-[20px] rounded-xl outline-none hover:shadow-sm"
          min={0}
          max={4}
          value={year}
          onChange={(val) => setYear(val)}
        />
      </div>
    </div>
  );
};
