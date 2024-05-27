import {  NavLink } from "react-router-dom"
import "./Sidebar.scss"
import {  MenuUnfoldOutlined } from "@ant-design/icons"
import { useState } from "react"



const Sidebar = () => {

  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  return (
    <div  className={ openSidebar ? "sidebar sidebar-open" : "sidebar"}>
      <div className="sidebar-header">
        <i onClick={() => setOpenSidebar(!openSidebar)} className="header-icon"><MenuUnfoldOutlined /></i>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'home'}>
           <span className="material-symbols-outlined link-icon">home</span>
            <p className="link-text">Manage All</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'/s'}>
          <span className="material-symbols-outlined link-icon">space_dashboard</span>
            <p className="link-text">Manage Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'/a'}>
          <span className="material-symbols-outlined link-icon">trending_up</span>
            <p className="link-text">Analytics</p>
          </NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'/a'}>
          <span className="material-symbols-outlined link-icon">database</span>
            <p className="link-text">Store</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'/a'}>
          <span className="material-symbols-outlined link-icon">settings</span>
            <p className="link-text">Settings</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
