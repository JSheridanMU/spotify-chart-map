import React from "react";

export default function ChartsData(chart) {
  
  if (chart) {
    return chart.map((entry) => {
      return (
        <tr key = {entry.position}>
          <td>{chart.indexOf(entry)+1}</td>
          <td>{entry['track name'] + ' by ' + entry.artist}</td>
          <td>{entry.streams}</td>
        </tr>
      )
    })
  } else {
    return (<tr><td>!!!</td><td>Loading</td><td>!!!</td></tr>)
  }
}