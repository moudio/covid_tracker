import React from 'react';
import { useState } from 'react';
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
  const [countries, setCountries] = useState(['USA', 'Senegal', 'France']);
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
