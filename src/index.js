import React from 'react';
import ReactDOM, { render } from 'react-dom';



let colours = ['red', 'blue', 'black', 'pink', 'white']

let colourResult = [{ red: "am red", blue: "am blue", black: "am black", pink: "am pink", white: "am white" }]

class ColourFilter extends React.Component {

  state = { colourPicked: '', chosenColour: '' }

  getAction = (event) => {
    this.setState({ colourPicked: event.target.text }, () => {
      colourResult.map((col) => {
        this.setState({ chosenColour: col[this.state.colourPicked] })
      })
    })
  }
  render() {
    let { colourOption } = this.props
    return (
      <div>
        {colourOption.map(colour =>
          <div>
            <ul>
              <li><a href="#" name={colour} onClick={this.getAction}>{colour}</a></li>
            </ul>
          </div>

        )}
        <div>{this.state.chosenColour}</div>
      </div>

    )
  }
}

ReactDOM.render(
  <ColourFilter colourOption={colours} />, document.getElementById('root')
)  