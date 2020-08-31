import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormControl,
  Select,
  option,
  Button,
  InputLabel,
  Input,
  FormHelperText,
  MenuItem,
} from '@material-ui/core';
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
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
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
