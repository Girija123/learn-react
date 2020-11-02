import React from 'react';
import ReactDOM from 'react-dom';

let users = { username: 'girijas123', password: 'Maturity123@' }

class Login extends React.Component {
  
  state = { username: '', password: '' }
  
  username = (event) => {
    this.setState({ username: event.target.value })
    console.log(this.state.username);
  }

  password = (event) => {
    this.setState({ password: event.target.value })
  }

  loginValidation = () => {
    if (this.state.username === this.props.users.username && this.state.password === this.props.users.password) {
      document.getElementById('displayText').innerText = "You are successfully logged in"
    }
    else {
      document.getElementById('displayText').innerText = "please verify your username and password"
    }
  }

  render() {

    return (

      <div>
        <h1>Login</h1>
        <label>Username</label>
        <input type='text' onChange={this.username} />
        <label>Password</label>
        <input type='text' onChange={this.password} />
        <button onClick={this.loginValidation}>Submit</button>
        <label id='displayText'></label>
      </div>
    )
  }
}


ReactDOM.render(
  <Login users={users} />, document.getElementById('root')
)