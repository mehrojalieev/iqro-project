import { Outlet } from "react-router-dom"
import Sidebar from "../../layout/sidebar/Sidebar"
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard">
        <Sidebar/>
        <div className="dashboard-content">
          <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard
