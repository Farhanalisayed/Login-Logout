// Write your code here
import './index.css'

const Logout = props => {
  const {loggedOut, text} = props
  const onLoggedOut = () => {
    loggedOut()
  }

  return (
    <button className="button" onClick={onLoggedOut} type="button">
      {text}
    </button>
  )
}
export default Logout
