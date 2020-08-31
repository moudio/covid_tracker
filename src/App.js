import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import './App.css';

function App() {
  const [countries, setCountries] = useState(['USA', 'Senegal', 'France']);
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
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
