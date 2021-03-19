import React from 'react'
import './home.scss'

class Home extends React.Component{
    render(){
        return(
            <div className = 'home'>
                <div className = 'content'>
                    <p className = 'first-para'>
                        ELSOC Presents FaceMask
                    </p>
                    <p className = 'second-para'>
                        A Fun event for guessing the career of your collegemates and friends.
                    </p>
                </div>
                <div className = 'btn'>
                    Join Contest
                </div>
            </div>
        )
    }
}

export default Home