import '../assets/styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  return (
    <>
    <nav className={`navbar ${location.pathname === '/about' ? 'about-navbar' : ''}`}>
        <h2 className="nav-h2"> <i className="fa-solid fa-utensils"></i>  Little Bites</h2>

        <div className="list-items">
           <Link to={'/'}>Home</Link>
           <Link to={'/about'}>About</Link>
            <Link to={'/menu'}>Menu</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>

        <div className="icons">
            <Link to={'/search'}><i className="fa-solid fa-magnifying-glass"></i></Link>
            <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
            <button className="nav-btn"> <Link to={'/login'}>Login</Link></button>
        </div>
    </nav>
    </>
  )
}

export default Navbar