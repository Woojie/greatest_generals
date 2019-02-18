import React from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * @param {name, portrait, rank, nationality} props from TheList.js
 * @returns UI component for the List 
 */

const Generals = ({ name, portrait, rank, nationality }) => (
  <div className="grid--column--3" data-test="generals-component">
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

Generals.propTypes = {
  name: PropTypes.string.isRequired,
  portrait: PropTypes.string,
  rank: PropTypes.number,
  nationality: PropTypes.string
}

export default Generals