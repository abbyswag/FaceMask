import React from 'react'

class Input extends React.Component{
    render(){
        return(
            <input
            type='text'
            name={this.props.name}
            onChange={this.props.handler}
            placeholder={this.props.placeholder}
            required
            />
        )
    }
}

export default Input