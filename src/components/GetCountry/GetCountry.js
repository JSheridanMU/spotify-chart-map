import { useState } from 'react'
import codes from '../../data/codes.json'

export default function GetCountry(initialCountry) {
  const [country, setCountry] = useState(initialCountry)
  const countryCodes = Object.assign({}, ...Object.entries(codes).map(([a,b]) => ({ [b]: a })))

  const handleInputChange = (e) => {
    setCountry({
      name: e.ADMIN,
      code: countryCodes[e.ISO_A3].toLowerCase()
    })
  }

  return {
    country,
    setCountry,
    handleInputChange,
  }
}
