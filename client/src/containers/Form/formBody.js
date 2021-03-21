import React from 'react'
import {Redirect} from 'react-router-dom'
import Canvas from '../../components/canvas/canvas'
// import Input from '../../components/input/input'
import './formBody.scss'

class FormBody extends React.Component{
    constructor(props){
        super()
        this.state = {
            imgURL: '',
            message: ''
        }
        this.handleImage = this.handleImage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    handleImage(event){
        this.setState({imgURL: URL.createObjectURL(event.target.files[0])})
    }

    handleSubmit(event){
        event.preventDefault()
        const data = new FormData(event.target)

        fetch('http://127.0.0.1:5000/user/register', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(data => {
            this.setState({message: data.message})
        })
    }
    
    handleRedirect(){
        if(this.state.message === 'true')return <Redirect to='/vote' />
        else return null
    }
    

    render(){
        return(
            <div className = 'join-page'>
                {this.handleRedirect()}
                <form className = 'join-form'
                onSubmit={this.handleSubmit}
                >
                    <div className = 'image-data'>
                        <Canvas
                        imgURL = {this.state.imgURL}
                        />
                        <div className = 'opts'>
                            <input
                            type= 'file'
                            name= 'image'
                            onChange={this.handleImage}
                            required
                            />
                        </div>
                    </div>
                    <div className = 'other-data'>
                        <div className='input-wrapper'>
                            <input
                            type='text'
                            name='name'
                            placeholder='User Name'
                            required
                            />
                            <input
                            type='text'
                            name='email'
                            placeholder='Email Address'
                            required
                            />
                            <input
                            type='text'
                            name='career'
                            placeholder='Career'
                            required
                            />                            
                        </div>
                        <div className='btn-wrapper'>
                            <button className='btn'
                            type='submit'
                            >
                                Submit
                            </button>
                            <button className='btn'
                            type='reset'
                            >
                                Reset
                            </button>
                        </div>                        
                    </div>
                </form>
            </div>
        )
    }
}

export default FormBody