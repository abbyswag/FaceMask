import React from 'react'
import Header from './components/header/header'
import Home from './components/home/home'
import './App.scss';

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <Home/>
      </React.Fragment>
    )
  }
}

export default App;
