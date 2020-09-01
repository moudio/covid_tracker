import React from 'react';
import numeral from 'numeral';

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>{numeral(cases).format('0,0')}</td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
