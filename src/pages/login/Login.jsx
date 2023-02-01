import Google from "../../img/google.png"
import './login.css'
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls"
import { Link } from "react-router-dom";
import Navba from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
 
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{ username, password });
    console.log(error)
  };

  return ( 
    <div>
      <Announcement/>
    <Navba/>
    <div className="login">
      
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick="">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>

        </div>
        <div className="right">
          <input type="text" placeholder="Username"     
          onChange={(e) => setUsername(e.target.value)}
 />
          <input type="password" placeholder="Password"
           onChange={(e) => setPassword(e.target.value)}
                      />
          <button className="submit" onClick={handleClick} disabled={isFetching}>Login</button>
          {error && <p>Something went wrong...</p>}

        </div>

      </div>
      <Link to="/registre" className="Create">Create Account </Link>
      </div>
    </div>
  );
};

export default Login;