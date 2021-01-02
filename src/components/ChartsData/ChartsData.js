import React from "react";

function getData(date, country, tableType){
  return {
    "chart": "top_200_daily",
    "data": [
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
}

export default function ChartsData(date, country, tableType) {
  const chartData = getData(date, country, tableType)

  if (tableType = "gData") {
    return chartData.data.map((tData) => {
      return (
        <tr key = {tData["Position"]}>
          <td>{tData["Position"]}</td>
          <td>{tData["Track Name"]}</td>
          <td>{tData["Streams"]}</td>
        </tr>
      )
    })
  }
  if (tableType = "cData") {
    return chartData.data.map((tData) => {
      return (
        <tr key = {tData["Position"]}>
          <td>{tData["Position"]}</td>
          <td>{tData["Track Name"]}</td>
          <td>{tData["Streams"]}</td>
        </tr>
      )
    })
  }
  else {
    return (<tr><td>!!!</td><td>Error</td><td>!!!</td></tr>)
  }
}