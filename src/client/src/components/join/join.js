import React from 'react'
import './join.scss'

class JoinPage extends React.Component{
    constructor(props){
        super()
        this.data = 'data'
    }

    send(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({title: this.data })
        }
        fetch('/user/data',requestOptions)
        .then(responce => responce.json())
        .then(data => console.log(data))
    }

    render(){
        return(
            <div className = 'join-page'>
                <div className = 'join-form'>
                    <div className = 'image-data'>
                        <canvas></canvas>
                        <div className = 'opts'>
                            <input type = 'file'></input>
                        </div>
                    </div>
                    <div className = 'other-data'>
                        <p>
                            Enter these data, it will be stored saftely...
                        </p>
                        <input type = 'text' name = ''></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinPage