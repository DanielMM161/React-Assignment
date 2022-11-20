import { Link } from 'react-router-dom'
import './styles/Button.css'

const Button = ({id}) => {
  return (
    <Link to={`/user/${id}`}>
      <button class="button">MORE DETAILS</button>
    </Link>
  )
}

export default Button