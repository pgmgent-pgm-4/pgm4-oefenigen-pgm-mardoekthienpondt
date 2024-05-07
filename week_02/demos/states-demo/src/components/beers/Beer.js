import React from 'react'

export default function Beer({beer}) {
  return (
    <li className="beer">
      <h3>{beer.title} - {beer.alchool}</h3>
      <p>{beer.description}</p>
    </li>
  )
}
