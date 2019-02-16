import React from 'react'

import { connect } from "react-redux";

import Generals from './generals'


class TheList extends React.Component{

  render(){

    const generalList = this.props.generals.map(general=><Generals key={general.id} name={general.name} />)

    return(
      <React.Fragment>
        <h1>The List</h1>
        <div className="container generalList--column">
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

export default connect(mapStateToProps)(TheList)