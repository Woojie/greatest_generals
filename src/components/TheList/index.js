import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'

import Generals from './generals'

/**
 * @var mapStateToProps grabs the genral list from redux
 * @var generalList maps out the list of generals 
 */

class TheList extends React.Component{

  render(){

    const generalList = this.props.generals.map(general=><Generals 
      key={general.id} 
      name={general.name}
      date={general.date}
      portrait={general.image}
      rank={general.rank}
      nationality={general.nationality} 
    />)

    return(
      <React.Fragment>
        <h1 className="page-title">The List</h1>
        <div data-test="thelist-component" className="container grid--column">
          {generalList}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ theList:{ generalList } }) => {
  return{
    generals:generalList
  }
}

TheList.propTypes = {
  generals: PropTypes.array
}

export default connect(mapStateToProps)(TheList)
