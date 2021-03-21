import React from 'react'
import './statusBar.scss'

class StatusBar extends React.Component{
    render(){
        return(
            <div className='status-bar'>
                <div className='lable'>
                    {this.props.lable}
                </div>
                <div className='status'>
                    {this.props.status}
                </div>
            </div>
        )
    }
}

export default StatusBar