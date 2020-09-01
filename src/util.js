import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';
export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => b.cases - a.cases);
  return sortedData;
};

// draw circles on map with interactive tooltip
export const showDataOnMap = (data, casesType = 'cases') =>
  data.map((country, index) => (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format('0,0')}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format('0,0')}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format('0,0')}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    multiplier: 800,
  },
  recovered: {
    hex: '#32CD32',
    multiplier: 1200,
  },
  deaths: {
    hex: '#000',
    multiplier: 2000,
  },
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format('0.0a')} ` : '';
