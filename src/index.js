import React from 'react';
import ReactDOM from 'react-dom';



class NewYearTimer extends React.Component {

  componentDidMount() {
    var time = setInterval(function () {
      var date = Date.now()
      var newYearDate = new Date('Jan 01, 2021 00:00:00').getTime();
      var daysToGo = newYearDate - date
      var days = Math.floor(daysToGo / (1000 * 60 * 60 * 24))
      var hours = Math.floor((daysToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = Math.floor((daysToGo % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((daysToGo % (1000 * 60)) / 1000)
      document.getElementById('countDownDate').innerHTML = +days + "days" + " " + +hours + "hours" + " " + +minutes + "minutes" + " " + +seconds + "seconds"
      if (daysToGo < 0) {
        clearInterval(time);
        document.getElementById('countDownDate').innerHTML = "Happy New year, Welcome 2021"
      }

    }, 1000)

  }

  render() {
    return (
      <div>
        <label>Days To Go For new Year</label>
        <p id="countDownDate"></p>
      </div>
    )
  }
}

ReactDOM.render(
  < NewYearTimer />, document.getElementById('root')
)
