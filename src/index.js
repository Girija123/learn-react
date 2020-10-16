import React from 'react';
import ReactDOM from 'react-dom';
import About from '../src/About/about'
import Contact from '../src/Contact/contact'
import Footer from '../src/Footer/footer'
import Header from '../src/Header/header'
import Showcase from '../src/Showcase/showcase.js'

const layout ={
  color: 'blue'
}

class Home extends React.Component {

  

  render(){
    return(
        <div className="App">
         <Header style ={layout}/>
         {/*<Showcase />
         <About />
         <Contact />
         <Footer /> */}
        </div>
    )
  }

}

ReactDOM.render (
  <Home />, document.getElementById('root')
)