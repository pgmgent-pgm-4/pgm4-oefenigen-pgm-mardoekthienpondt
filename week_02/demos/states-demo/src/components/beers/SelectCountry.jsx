import React from 'react';

export default function SelectCountry({ countries, setCountry, country}) {
  return (
    <select value={country} onChange={(e)=>{setCountry(e.target.value)}}>
      {countries.map((country, index) => (
        <option key={`country-${index}`} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
}
