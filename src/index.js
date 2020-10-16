import React from 'react';
import ReactDOM from 'react-dom';
import About from '../src/About/about'
import Contact from '../src/Contact/contact'
import Footer from '../src/Footer/footer'
import Header from '../src/Header/header'
import Showcase from '../src/Showcase/showcase.js'


class Home extends React.Component {

  render(){
    return(
        <div className="App">
         <Header/>
        </div>
    )
  }

}

ReactDOM.render (
  <Home />, document.getElementById('root')
)