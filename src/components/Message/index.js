import './index.css'

const Message = props => {
  const {login} = props
  if (login === true) {
    return <h1 className="heading">Welcome User</h1>
  }
  return <h1 className="heading">Please Login</h1>
}
export default Message
