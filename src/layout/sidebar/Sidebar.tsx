import {  NavLink } from "react-router-dom"
import "./Sidebar.scss"
import {  MenuUnfoldOutlined } from "@ant-design/icons"

const Sidebar = () => {

  return (
    <div  className="sidebar">
      <div className="sidebar-header">
        <i  className="header-icon"><MenuUnfoldOutlined /></i>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'home'}>
           <span className="material-symbols-outlined link-icon">home</span>
            <p className="link-text">Manage All</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'manage-products'}>
          <span className="material-symbols-outlined link-icon">space_dashboard</span>
            <p className="link-text">Manage Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'manage-users'}>
          <span className="material-symbols-outlined link-icon">group</span>
            <p className="link-text">Manage Users</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'analytics'}>
          <span className="material-symbols-outlined link-icon">trending_up</span>
            <p className="link-text">Analytics</p>
          </NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'store'}>
          <span className="material-symbols-outlined link-icon">database</span>
            <p className="link-text">Store</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'settings'}>
          <span className="material-symbols-outlined link-icon">settings</span>
            <p className="link-text">Settings</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
