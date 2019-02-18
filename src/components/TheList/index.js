import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'

import Generals from './generals'


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
        <div className="container grid--column">
          {generalList}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ theList }) => {
  return{
    generals:theList
  }
}

TheList.propTypes = {
  generals: PropTypes.array
}

export default connect(mapStateToProps)(TheList)
