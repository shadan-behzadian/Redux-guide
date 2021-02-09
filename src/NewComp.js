import React , {Component} from 'react'
import { ReactReduxContext } from 'react'
import { connect } from 'react-redux'

import mapDispatchtoProps from './Action'


class NewComp extends Component {
    
// ButtonChange = () => {
// this.setState({
//     message : 'Thanks for choosing Ironhack'
// }
// )
// }

render(){
    return(
        <div>
           <h3> {this.props.message}</h3>
           <button onClick={this.props.ButtonChange}> Join now </button>

        </div>
    )
}

    }

    const mapStatetoProps = state =>{
        return{
message : state.message
        }
    }


export default connect(mapStatetoProps, mapDispatchtoProps)(NewComp)