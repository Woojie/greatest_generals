import React from 'react'

const Generals = ({ name, portrait, rank, nationality }) => (
  <div className="generalList--column--3">
    <div className="card">
      <img alt={ name } className="card--image" src={ portrait } />
      <div className="card--content">
        <h3 className="card--content--title">{ name }</h3>
        <p><b>Rank:</b> { rank }</p>
        <p><b>Nationality: </b> { nationality }</p>
      </div>
    </div>
  </div>
)

export default Generals