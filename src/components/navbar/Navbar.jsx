import React from 'react'
import {Link} from "react-router-dom";
import './navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

const Navba = () => {
  const user = useSelector((state)=>state.user.currentUser)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout()) 
    localStorage.clear()
    window.location.href = '/'
  }
  return (
    
    <section id="home">
        <header>
            <nav className="nav">
              <p className="logo">logo</p>

              <div className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>

              <div className="nav__link hide">
              <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/write">Write</Link>
               {user &&(<Link onClick={() => handleLogout()}>LOGOUT</Link>)} 

              </div>
             
              <div className="nav__link hide">
             
              {!user && (<>
               <Link to="/login">Login</Link>
              <Link to="/registre">Registre</Link>  
              </>  )} 
              {user && ( <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
           
          </Link>    
              )}
              </div>
              
            </nav>
          </header>
    </section>
      )
}

export default Navba
// slider cat  transaction