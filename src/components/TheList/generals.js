import React from 'react'

const Generals = ({ name, portrait, rank, nationality }) => (
  <div className="generalList--column--4">
    <div className="card">
      <img alt={ name } className="card--image" src={ portrait } />
      <h3 className="card--title">{ name }</h3>
      <p><b>Rank:</b> { rank }</p>
      <p><b>Nationality: </b> { nationality }</p>
    </div>
  </div>
)

export default Generals