// Write your code here
import {Component} from 'react'
import Login from './components/Login.index.js'
import Logout from './components/Logout.index.js'
import Message from './components/Message.index.js'
import './index.css'

class Home extends Component {
  state = {
    login: false,
  }
  loggedIn = () => {
    this.setState({login: true})
  }
  loggedOut = () => {
    this.setState({login: false})
  }
  renderButton = () => {
    const {login} = this.state
    if (login === true) {
      return <Logout loggedOut={this.loggedOut} text="Logout" />
    }
    return <Login loggedIn={this.loggedIn} text="Login" />
  }

  render() {
    const {login} = this.state

    return (
      <div className="the-home">
        <div className="card">
          <Message login={login} />
          {this.renderButton()}
        </div>
      </div>
    )
  }
}
export default Home
