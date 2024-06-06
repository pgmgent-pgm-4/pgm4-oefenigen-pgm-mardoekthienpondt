import React, { useEffect, useState } from 'react';
import { Marker } from 'react-map-gl';
import { flags } from '../data/country-flags.js';
export default function MapMarker({ longitude, latitude, countryCode }) {
  const [currentFlagUrl, setCurrentFlagUrl] = useState(
    'https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e8.svg'
  );

  useEffect(() => {
    const currentCountry = flags.filter((flag) => {
      return flag.code && flag.code?.toLowerCase() === countryCode.toLowerCase();
    });
    if (currentCountry.length > 0) setCurrentFlagUrl(currentCountry[0].flag);  }
    ,[countryCode]);

  return (
    <>
      {currentFlagUrl && (
        <Marker longitude={longitude} latitude={latitude} anchor="bottom">
          <img className="marker" src={currentFlagUrl} />
        </Marker>
      )}
    </>
  );
}
