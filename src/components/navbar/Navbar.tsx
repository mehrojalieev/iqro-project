import { SearchOutlined } from "@ant-design/icons";
import "./Navbar.scss"
import { Badge, Input } from 'antd';
const Navbar = () => {
  return (
    <div className="navbar-header">
        <div className="search-form">
      <Input size="large" placeholder="Search Anything"   prefix={<SearchOutlined />} />
        </div>
        <div className="navbar-action">
            <span className="material-symbols-outlined email-icon">email</span>
            <Badge className="badge" count={5}>
            <span className="material-symbols-outlined">notifications</span>
            </Badge>
            <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" className="avatar" />
        </div>
    </div>
  )
}

export default Navbar
