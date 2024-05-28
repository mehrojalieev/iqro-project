import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Dashboard from "../pages/dashboard/Dashboard"
import DashboardHome from "../pages/dashboard/dashboard-home/DashboardHome"
import ManageProducts from "../pages/dashboard/manage-products/ManageProducts"
import ManageUsers from "../pages/dashboard/manage-users/ManageUsers"
import Analytics from "../pages/dashboard/analytics/Analytics"
import Store from "../pages/dashboard/store/Store"
import Settings from "../pages/dashboard/settings/Settings"

const RouteController = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>    }/>
        <Route path="dashboard" element={<Dashboard/>}>
            <Route path="home" element={<DashboardHome/>}/>
            <Route path="manage-products" element={<ManageProducts/>}/>
            <Route path="manage-users" element={<ManageUsers/>}/>
            <Route path="analytics" element={<Analytics/>}/>
            <Route path="store" element={<Store/>}/>
            <Route path="settings" element={<Settings/>}/>
        </Route>
    </Routes>
  )
}

export default RouteController
