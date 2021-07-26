import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {islogin: false}

  click = () => {
    const {islogin} = this.state
    if (islogin === true) {
      this.setState({islogin: false})
    } else {
      this.setState({islogin: true})
    }
    console.log('triggered')
  }

  render() {
    const {islogin} = this.state
    let message = null
    if (islogin === false) {
      message = 'Please Login'
    } else {
      message = 'Welcome User'
    }
    return (
      <div className="container">
        <Message msg={message} />
        <button onClick={this.click} type="button" className="button">
          {islogin ? <Login /> : <Logout />}
        </button>
      </div>
    )
  }
}

export default Home
