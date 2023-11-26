// Write your code here
import './index.css'

const Login = props => {
  const {loggedIn, text} = props
  const onLoggedIn = () => {
    loggedIn()
  }

  return (
    <button className="button" onClick={onLoggedIn} type="button">
      {text}
    </button>
  )
}
export default Login
