import React, { Component } from 'react';

class Toggle extends Component {
    state = { 
        expand: false
     }

    handleToggle = () =>{
        this.setState (state =>({
            expand: !state.expand
        }))
    }
    render() { 
        return ( 
            <React.Fragment>
                <button onClick={this.handleToggle}>Details</button>
                {this.state.expand && <span><p>{this.props.description}</p><p>{this.props.techUsed}</p></span>}
            </React.Fragment>
         );
    } 
}
export default Toggle;