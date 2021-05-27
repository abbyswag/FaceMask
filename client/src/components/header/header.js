import React from 'react'
import {Link } from "react-router-dom";
import './header.scss'

class Header extends React.Component{
    constructor(){
        super()
        this.navOpts=[
            ['/user','Vote'],
            ['/user/result','Result'],
            ['/shedule','Shedule'],
            ['/about','AboutUs']
        ]
    }
    render(){
        return(
            <div className = 'header'>
              <div className = 'app-name'>
                    <Link
                    className='link'
                    to='/'>
                        ForTeller
                    </Link>
                </div>
                <div className='logo-wrapper'>
                    <div className='logo'>
                    </div>
                </div>
                <div className = 'nav-bar'>
                    {this.navOpts.map((opt,index) => {
                        return(
                            <NavOpt
                            link={opt[0]}
                            name={opt[1]}
                            />
                        )                        
                    })}
                </div>
            </div>
        )
    }
}


class NavOpt extends React.Component{
    render(){
        return(
            <div className='nav-opt'>
                <Link
                className='link'
                to={this.props.link}>
                    {this.props.name}
                </Link>
            </div>
        )
    }
}


export default Header