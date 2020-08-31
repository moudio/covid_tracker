import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  useEffect(() => {
    const getCountriesData = async () => {
      axios.get('https://disease.sh/v3/covid-19/countries').then((response) => {
        const { data } = response;
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        setCountries(countries);
      });
    };
    getCountriesData();
  }, []);
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };
  return (
    <div className="app__left">
      <div className="app">
        <div className="app__header">
          <h1>COVID 19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox title="Coronavirus cases" cases={123} total={2000} />
          <InfoBox title="Recovered" total={3000} cases={1256} />
          <InfoBox title="Deaths" cases={3679} total={30} />
        </div>
        <Map />
      </div>
    </div>
  );
}

export default App;
