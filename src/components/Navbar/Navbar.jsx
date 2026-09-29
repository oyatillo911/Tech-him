import "./Navbar.css"
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
    <nav>
      <div className="container">
        <div className="nav_logo">
          <NavLink to={"/"}><img src="/public/imgs/logo.png" alt="" /></NavLink>
        </div>
        <ul className="links">
          <li><NavLink to={"/"} >Home</NavLink></li>
          <li><NavLink to={"/products"}>Products</NavLink></li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav_icons">
        <div className="nav_box">
        <CiSearch />
        </div>
        <div className="nav_box">
          
        <CiShoppingBasket />
        </div>
        <div className="nav_box">
          
        <BiUser />
        </div>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar