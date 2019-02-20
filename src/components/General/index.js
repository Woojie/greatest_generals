import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { activeGeneral } from "../../actions";

class General extends React.Component{

  componentDidMount(){
    const { generalsid } = this.props.match.params
    this.props.activeGeneral(generalsid)
  }
  render(){

    return(
      <div>
        <h1>{this.props.currentGeneral.name}</h1>
      </div>
    )
  }
}

const mapStatetoProps = ({ theList }) => {
  return {
    currentGeneral: theList.activeGeneral
  }
}

const dispatchRedux = dispatch => bindActionCreators({ activeGeneral }, dispatch)

export default connect(mapStatetoProps, dispatchRedux)(General)