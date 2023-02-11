import React, { useState } from 'react';
import { Map, ZoomControl } from 'pigeon-maps';
import { CountryData } from '../Pages/Statistics/Statistics';
import ReactSlider from 'react-slider';

interface MapProps {
  center: [number, number];
  zoom: number;
  countryMarkers: CountryData[];
}

export const MappingComp: React.FC<MapProps> = ({
  countryMarkers,
  center,
  zoom,
}) => {
  const [year, setYear] = useState(0);

  return (
    <div className="z-20 relative">
      <Map width={650} height={500} center={center} zoom={zoom}>
        <ZoomControl />
      </Map>
      <div className="absolute bottom-0 left-0 z-50">
        <p className="p-3 bg-yellow-100 mx-2 mb-4 text-yellow-500 w-[100px] text-center rounded-xl">
          {year + 2019}
        </p>
        <ReactSlider
          className="customSlider"
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          min={0}
          max={4}
          onChange={(val) => setYear(val)}
        />
      </div>
    </div>
  );
};
