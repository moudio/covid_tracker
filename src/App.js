import React from 'react';
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
  return (
    <div className="app">
      <h1>COVID 19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Ten</MenuItem>
          <MenuItem value="worldwide">Twenty</MenuItem>
          <MenuItem value="worldwide">Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
