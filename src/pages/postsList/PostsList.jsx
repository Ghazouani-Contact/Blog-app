import React, { useState } from 'react'
import { useEffect } from 'react';
import './postsList.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Announcement from '../../components/announcement/Announcement';
import Navba from '../../components/navbar/Navbar'
const PostsList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
 const[Posts ,setPosts]=useState([])
 useEffect(()=>{
 const getPosts =async()=>{
    try {
      const res = await axios.get(
        cat
        ? `http://localhost:5000/api/posts?category=${cat}`
        : "http://localhost:5000/api/posts"
      );
      setPosts(res.data);
    } catch (error) {
      
    }
  };
  getPosts();
 },[cat])
 const PF= "http://localhost:5000/images/"

  return (
  

<div className='bgP'>
 
<Announcement/>
  <Navba/>
  <h1>{cat}</h1>
<ul className="cardsP" >
{Posts.map((item)=>(
 
  <li item={item} key={item._id}>
    <Link to={`/singlePost/${item._id}`} className="cardP">
      <img src={PF + item.img} className="card__imageP" alt="" />
      <div className="card__overlayP">
        <div className="card__headerP">
          <svg className="card__arcP" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumbP" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-textP">
            <h3 className="card__titleP">{item.title}</h3>            
            <span className="card__statusP">{item.title}</span>
          </div>
        </div>
        <p className="card__descriptionP">{item.desc}</p>
      </div>
    </Link>      
  </li>
         ))}
</ul>

</div>



  )
}

export default PostsList