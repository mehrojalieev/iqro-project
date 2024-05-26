import { Link, NavLink } from "react-router-dom"
import "./Sidebar.scss"
import { HomeOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <i className="header-icon"><MenuUnfoldOutlined /></i>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'home'}>
           <span className="material-symbols-outlined link-icon">home</span>
            <p className="link-text">Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'/s'}>
          <span className="material-symbols-outlined link-icon">space_dashboard</span>
            <p className="link-text">Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'/a'}>
          <span className="material-symbols-outlined link-icon">trending_up</span>
            <p className="link-text">Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"} to={'/a'}>
          <span className="material-symbols-outlined link-icon">database</span>
            <p className="link-text">Home</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
