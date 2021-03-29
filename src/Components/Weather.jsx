import React from 'react'

export default function Weather(props) {
  return (
    <div>
      <h1>{new Date().toLocaleString()}</h1>
      <h1>{props.data.name}</h1>
      <h2>{props.data.main.temp}</h2>
    </div>
  )
}
