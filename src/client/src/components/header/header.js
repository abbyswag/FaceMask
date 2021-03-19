import React from 'react'
import './header.scss'
const data = require('./header.json')

class Header extends React.Component{
    render(){
        return(
            <div className = 'header'>
                <div className = 'app-name'>
                    {data['name']}
                </div>
                <div className = 'nav-bar'>
                    {data['nav-opt'].map(opt =>{
                        return(
                            <div className = 'nav-opt'>
                                {opt}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Header