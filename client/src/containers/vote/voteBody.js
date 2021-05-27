import React from 'react'
import Btn from '../../components/btn/btn'
import StatusBar from '../../components/statusBar/statusBar'
import HorizontalCard from '../../components/horizontalCard/card'
import './voteBody.scss'

class VoteBody extends React.Component{
    constructor(props){
        super()
        this.state= {
            users: [],
        }
        this.btnsData= [
            ['Join Contest', '/user/register']
        ]
    }

    componentDidMount(){
        fetch('/user/list')
        .then(res => res.json())
        .then(data => {
            this.setState({users: data.list})
        })
    }

    getImage(path){
        return `/user/${path}`
    }

    render(){
        return(
            <div className='vote-body'>
                <div className='opts'>
                    <div className='btns'>
                        {this.btnsData.map(data => {
                            return(
                                <Btn
                                name={data[0]}
                                link={data[1]}
                                />
                            )
                        })}
                    </div>
                    <StatusBar
                    lable='Contest Ends'
                    status='12 : 43 : 13'
                    />
                </div>
                <div className='cards'>
                    {this.state.users.map(user => {
                        return (
                            <HorizontalCard
                            name={user.name}
                            score={user.score}
                            email={user.email}
                            imagePath={this.getImage(user.image)}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default VoteBody