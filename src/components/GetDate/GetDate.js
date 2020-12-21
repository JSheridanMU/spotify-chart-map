import { useState } from 'react'
import GetCharts from "../GetCharts/GetCharts"

export default function GetDate(initialDate) {
  const [date, setDate] = useState(initialDate)
 
  const handleDateChange = (input) => {
    setDate(input)
  }

  return {
    date,
    setDate,
    handleDateChange,
  }
}

//const { chart, handleDataChange } = GetCharts(initialChart, date.year, country.name);
//const { chart, handleInputChange } = GetCharts(initialChart, date, country.name);
//{
//  date: date.year,
//}
//handleDataChange,