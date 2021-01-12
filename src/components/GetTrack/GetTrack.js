import { useState } from 'react'

export default function GetTrack() {
  const [track, setTrack] = useState(null)

  const handleTrackChange = (input) => {
    setTrack(input)
  }

  return {
    track,
    setTrack,
    handleTrackChange,
  }
}
