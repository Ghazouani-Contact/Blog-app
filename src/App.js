import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registre from "./pages/registre/Registre";
import "./app.css";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import Write from "./pages/write/Write";
import About from "./pages/contact/About";
import Singlepost from "./pages/singlepost/Singlepost";
import { useSelector } from "react-redux";
import PostsList from "./pages/postsList/PostsList";
import UpdateP from "./pages/updateP/UpdateP";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
   <Router>  
      <Routes>
        <Route exact path="/" element={<Home />}/>
     
     
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />}/>
     
     
        <Route path="registre" element={<Registre />}/>
     
    
        <Route path="write" element={<Write/>}/>
     
     
        <Route path="about" element={<About/>}/>
     
     
        <Route path="/singlepost/:id" element={<Singlepost/>}/>
     
     
        <Route path="/postsList/:cats" element={<PostsList/>}/>
       
    
        </Routes>
     </Router>  
     );
}

export default App;
