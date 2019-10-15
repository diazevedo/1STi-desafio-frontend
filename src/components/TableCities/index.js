import React from "react";
import "./styles.css";

const TableCities = ({ cities }) => {
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>Min</th>
          <th>Máx</th>
        </tr>
      </thead>
      <tbody className="tbody-tsi">
        {cities.map(({ min, max, name }, index) => (
          <tr key={index}>
            <td className="td-min">{min}</td>
            <td>{max}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCities;
