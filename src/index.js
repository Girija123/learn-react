import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css"



let sizes = { kidsSize: "2-3", menSize: "XXL", womenSize: "XS" }

class Accordion extends React.Component {

  componentDidMount() {
    $('#accordion').accordion()
  }


  render() {
    let { displaySizes } = this.props
    return (

      <div id='accordion'>

        <Sizes displaySizes={displaySizes} />

      </div>

    )
  }
}

class Sizes extends React.Component {
  render() {
    let { displaySizes } = this.props

    return (
      <div>
        {Object.keys(displaySizes).forEach(key => {
          console.log(key)
          console.log(displaySizes)
          return <div>
            <h3>{key}</h3>
            <div>{displaySizes[key]}</div>
          </div>

        })
        }
      </div>
    )
  }
}


ReactDOM.render(
  <Accordion displaySizes={sizes} />, document.getElementById('root')
)