import React from 'react'

const Generals = ({ name, portrait }) => (
  <div className="generalList--column--4">
    <div className="card">
      <img className="card--image" src={portrait} alt={name} />
      <h3>{name}</h3>

    </div>
  </div>
)

export default Generals