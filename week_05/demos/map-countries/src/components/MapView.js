import React from 'react';
import Map, { Marker } from 'react-map-gl';
import MapMarker from './MapMarker';
import { countries } from '../data/countries.js';
export default function MapView() {
  return (
    <div>
      <Map
        mapboxAccessToken={`${process.env.REACT_APP_MAP_API_KEY}`}
        initialViewState={{
          longitude: 3.73249,
          latitude: 51.040169,
          zoom: 9,
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {countries.map((country) => {
          return (
            <MapMarker
              key={country.id}
              longitude={country.longitude}
              latitude={country.latitude}
              countryCode={country.iso2Code}
            />
          );
        })}
      </Map>
    </div>
  );
}
