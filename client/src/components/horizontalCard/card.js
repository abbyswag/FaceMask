import React from 'react'
import './card.scss'

class HorizontalCard extends React.Component{
    render(){
        return(
            <div className='card'>
                <div className='img'></div>
                <div className='content'>
                    <div className='data'>
                        <div className='name'>
                            {this.props.name}
                        </div>
                        <div className='score'>
                            score: <span>{this.props.score}</span>
                        </div>
                    </div>
                    <div className='choice'>
                        {/* <label>
                            Choose a Career:
                        </label> */}
                        <select>
                            {this.props.careers.map(career => {
                                return <option value={career}>{career}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default HorizontalCard