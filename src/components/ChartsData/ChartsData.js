import React from "react";

function getData(date, country, tableType){
  return [
    {
      "Position": 1,
      "Track Name": tableType + " 1st " + country + " Song " + date,
      "Streams": 2000000
    },
    {
      "Position": 2,
      "Track Name": tableType + " 2nd " + country + " Song " + date,
      "Streams": 1500000
    },
    {
      "Position": 3,
      "Track Name": tableType + " 3rd " + country + " Song " + date,
      "Streams": 1000000
    },
    {
      "Position": 1,
      "Track Name": tableType + " 1st " + country + " Song " + date,
      "Streams": 2000000
    },
    {
      "Position": 2,
      "Track Name": tableType + " 2nd " + country + " Song " + date,
      "Streams": 1500000
    },
    {
      "Position": 3,
      "Track Name": tableType + " 3rd " + country + " Song " + date,
      "Streams": 1000000
    },
    {
      "Position": 1,
      "Track Name": tableType + " 1st " + country + " Song " + date,
      "Streams": 2000000
    },
    {
      "Position": 2,
      "Track Name": tableType + " 2nd " + country + " Song " + date,
      "Streams": 1500000
    },
    {
      "Position": 3,
      "Track Name": tableType + " 3rd " + country + " Song " + date,
      "Streams": 1000000
    },
    {
      "Position": 1,
      "Track Name": tableType + " 1st " + country + " Song " + date,
      "Streams": 2000000
    },
    {
      "Position": 2,
      "Track Name": tableType + " 2nd " + country + " Song " + date,
      "Streams": 1500000
    },
    {
      "Position": 3,
      "Track Name": tableType + " 3rd " + country + " Song " + date,
      "Streams": 1000000
    },
    {
      "Position": 1,
      "Track Name": tableType + " 1st " + country + " Song " + date,
      "Streams": 2000000
    },
    {
      "Position": 2,
      "Track Name": tableType + " 2nd " + country + " Song " + date,
      "Streams": 1500000
    },
    {
      "Position": 3,
      "Track Name": tableType + " 3rd " + country + " Song " + date,
      "Streams": 1000000
    },
    {
      "Position": 1,
      "Track Name": tableType + " 1st " + country + " Song " + date,
      "Streams": 2000000
    },
    {
      "Position": 2,
      "Track Name": tableType + " 2nd " + country + " Song " + date,
      "Streams": 1500000
    },
    {
      "Position": 3,
      "Track Name": tableType + " 3rd " + country + " Song " + date,
      "Streams": 1000000
    },
    {
      "Position": 1,
      "Track Name": tableType + " 1st " + country + " Song " + date,
      "Streams": 2000000
    },
    {
      "Position": 2,
      "Track Name": tableType + " 2nd " + country + " Song " + date,
      "Streams": 1500000
    },
    {
      "Position": 3,
      "Track Name": tableType + " 3rd " + country + " Song " + date,
      "Streams": 1000000
    },
  ]
}

export default function ChartsData(chart) {
  const chartData = getData("01/01/2011", "Poland", "country")

  if (chartData) {
    return chartData.map((entry) => {
      return (
        <tr key = {chartData.indexOf(entry)}>
          <td>{entry["Position"]}</td>
          <td>{entry["Track Name"]}</td>
          <td>{entry["Streams"]}</td>
        </tr>
      )
    })
  }
  else {
    return (<tr><td>!!!</td><td>Error</td><td>!!!</td></tr>)
  }
}