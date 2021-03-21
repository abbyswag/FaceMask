import React from 'react'
import './btn.scss'

class Btn extends React.Component{
    render(){
        return(
            <div className='btn'>
                {this.props.name}
            </div>
        )
    }
}

export default Btn