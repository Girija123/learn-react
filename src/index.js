import React from 'react';
import ReactDOM from 'react-dom';


class TimerDisplay extends React.Component {

  state = { timerValue: '' }

  getNumber = (event) => {
    { this.setState({ timerValue: event.target.value }) }
  }

  increaseInput=()=>{
     
     var addNumber = document.getElementById('displayTimer').innerHTML;
     addNumber = Number.parseInt(addNumber)+1;
     this.setState({timerValue:addNumber})
  }

  decreaseInput=()=>{
    var decreaseNumber = document.getElementById('displayTimer').innerHTML;
    decreaseNumber=decreaseNumber-1;
    this.setState({timerValue:decreaseNumber})
  }
  
  render() {
    return (
      <div>
        <label>Enter Value</label>
        <input type='number' onChange={this.getNumber} />
        <button onClick={this.increaseInput}>Add</button>
        <button onClick={this.decreaseInput}>Sub</button>
        <label id="displayTimer">{this.state.timerValue}</label>
      </div>
    )
  }
}

ReactDOM.render(
  <TimerDisplay />, document.getElementById('root')
)