import { Button } from "antd"
import "./Home.scss"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="home">
        <Link to={'/dashboard'}>
        <Button>Go Dashboard</Button>
        </Link>
    </div>
  )
}

export default Home
