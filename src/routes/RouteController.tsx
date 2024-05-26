import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Dashboard from "../pages/dashboard/Dashboard"
import DashboardHome from "../pages/dashboard/dashboard-home/DashboardHome"

const RouteController = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>    }/>
        <Route path="dashboard" element={<Dashboard/>}>
            <Route path="home" element={<DashboardHome/>}/>
        </Route>
    </Routes>
  )
}

export default RouteController
