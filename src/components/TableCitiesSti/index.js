import React from "react"

 class TableCitiesSti extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      return (
        <table className="table-sti">
          <thead className="thead-sti">
            <tr>
              <th>Min</th>
              <th>Máx</th>
            </tr>
          </thead>
          <tbody className="tbody-tsi">
          {
            this.props.cities.map(({min, max, name}, index) =>
            <tr key={index}>
              <td className="td-min">{min}</td>
              <td>{max}</td>
              <td>{name}</td>
            </tr>
            )  
          }
          </tbody>
        </table>
      )
    }  
}

export default TableCitiesSti