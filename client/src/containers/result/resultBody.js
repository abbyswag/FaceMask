import React from 'react'
import Result from '../../components/result/result'
import './resultBody.scss'

class ResultBody extends React.Component{
    constructor(props){
        super()
        this.state= {
            results: [],
            isSearchBtnClicked: false
        }
    }

    componentDidMount(){
        fetch('/result')
        .then(res => res.json())
        .then(data => {
            this.setState({results: data.list})
        })
    }


    getImage(path){
        return `/user/${path}`
    }

    render(){
        return(
            <div className='result-body'>
                <div className='notice'>
                    Result
                </div>
                <div className='lable'>
                    Top Players
                </div>
                <div className='results'>
                    {this.state.results.map((result,index) => {
                        return(
                            <Result
                            name={result.name}
                            score={result.score}
                            rank={index+1}
                            imagePath={this.getImage(result.image)}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ResultBody