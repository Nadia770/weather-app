import React from 'react'

export default function Weather(prop) {
  console.log(prop.data)
  return (
    <div>
      <h1>{new Date().toLocaleString()}</h1>
      <h1>London</h1>
    </div>
  )
}
