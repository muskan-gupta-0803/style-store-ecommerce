import "../Navbar/Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <header className="header">
        <div className="lilac-navbar">
            {/* logo */}
            <Link to="/">
                <div className="lilac-nav-logo nav-logo">
                    Style Store
                </div>
            </Link>    

            {/*  nav search bar  */}
            <form className="form">
                <input type="search" name="" id="" className="nav-search br-sm" placeholder="Search" />
                <button type="submit" className="search-icon">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        
            {/*  nav links  */}
            <div className="lilac-nav-links">
                <Link to="/" className="lilac-nav-items">
                    <span className="btn btn-link login-button">Login</span>
                </Link>
                <Link to="/wishlist" className="lilac-nav-items">
                    <span className="icon-span">
                        <div className="num-badge">8</div>
                        <i className="far fa-heart"></i>  
                    </span>
                
                </Link>
                <Link to="/cart" className="lilac-nav-items">
                    <span className="icon-span">
                        <div className="num-badge">10</div>
                        <i className="fas fa-shopping-cart"></i>        
                    </span>
                </Link>
                <a href="#" className="lilac-nav-items">
                    <span><i className="fas fa-bars"></i></span>
                </a>
            </div>
        
        </div>

      </header>
    )
}