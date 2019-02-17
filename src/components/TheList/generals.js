import React from 'react'

const Generals = ({ name, portrait, rank, nationality }) => (
  <div className="generalList--column--3">
    <div className="card">
      <div className="card--ribbon">
        <div className="card--ribbon--text"> #{rank} </div>
      </div>
      <img alt={ name } className="card--image" src={ portrait } />
      <div className="card--content">
        <h3 className="card--content--title">{ name }</h3>
        {/* <p><b>Rank:</b> { rank }</p> */}
        <p><b>Nationality: </b> { nationality }</p>
      </div>
      <div className="card--hidden">
        <div className="card--hidden--button">
          More...
        </div>
      </div>
    </div>
  </div>
)

export default Generals