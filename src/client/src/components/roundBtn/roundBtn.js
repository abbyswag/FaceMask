import React from 'react'
import './roundBtn.scss'

class RoundBtn extends React.Component{
    render(){
        return(
            <div style = {{
                borderRadius:'50%',
                width: '3rem',
                height: '3rem',
                backgroundColor:'#'
            }}>
                {this.props.name}
            </div>
        )
    }
}

export default RoundBtn