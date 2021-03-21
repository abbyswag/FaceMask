import React from 'react'
import Btn from '../../components/btn/btn'
import StatusBar from '../../components/statusBar/statusBar'
import HorizontalCard from '../../components/horizontalCard/card'
import './voteBody.scss'

class VoteBody extends React.Component{
    constructor(props){
        super()
        this.btnsData = [
            'Join Contest',
            'Shuffle'
        ]
        this.careerData =[
            'developer',
            'musicians',
            'dancer'
        ]
    }

    getUsers(){
        fetch('http://127.0.0.1:5000/user/list')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render(){
        return(
            <div className='vote-body'>
                <div className='opts'>
                    <div className='btns'>
                        {this.btnsData.map(btn => {
                            return(
                                <Btn
                                name={btn}
                                />
                            )
                        })}
                    </div>
                    <StatusBar
                    lable='Participats'
                    status={123}
                    />
                </div>
                <div className='cards'>
                    <HorizontalCard
                    name='Abhishek'
                    score={23}
                    careers={this.careerData}
                    />
                    {this.getUsers()}
                </div>
            </div>
        )
    }
}

export default VoteBody