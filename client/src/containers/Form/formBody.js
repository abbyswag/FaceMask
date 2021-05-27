import React from 'react'
import {Redirect} from 'react-router-dom'
import Canvas from '../../components/canvas/canvas'
import TextField from '@material-ui/core/TextField'
import './formBody.scss'

const careers = require('../../assets/data/career.json')

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

        fetch('/user/register', {
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
            <div className = 'form-body'>
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
                            {/* <input
                            type='text'
                            name='name'
                            placeholder='User Name'
                            required
                            /> */}
                            <TextField
                            id="outlined-basic" 
                            label="User Name" 
                            variant="outlined"
                            type="text"
                            name='name'
                            required
                            style={{
                                backgroundColor: '#f7f7f7',
                                borderRadius: '5px',
                                margin: '.5rem 0',
                                width: '100%'
                            }}
                            />
                            <TextField
                            id="outlined-basic" 
                            label="Email Address" 
                            variant="outlined"
                            type="text"
                            name='email'
                            required
                            style={{
                                backgroundColor: '#f7f7f7',
                                borderRadius: '5px',
                                margin: '.5rem 0',
                                width: '100%'
                            }}
                            />
                            {/* <input
                            type='text'
                            name='email'
                            placeholder='Email Address'
                            required
                            /> */}
                            <select
                            className='select'
                            name='career'>
                                {careers.data.map(career => {
                                    return(
                                        <option value={career}>
                                            {career}
                                        </option>
                                    )
                                })}
                            </select>  
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