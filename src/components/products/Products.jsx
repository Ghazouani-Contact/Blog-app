import React, { useState } from 'react'
import { useEffect } from 'react';
import './products.css';
import axios from "axios";
import { Link } from 'react-router-dom';
const Products = ({cat}) => {
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
  

<div className='bg'>
 

 
<ul className="cards" >
{Posts.map((item)=>(
  <li item={item} key={item._id}>
    <Link to={`/singlePost/${item._id}`} className="card">
      <img src={PF + item.img} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={PF +  item.img} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{item.title}</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">{item.desc}</p>
      </div>
    </Link>      
  </li>
      ))}
</ul>

</div>



  )
}

export default Products