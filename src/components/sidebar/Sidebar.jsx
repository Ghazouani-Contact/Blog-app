import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data";
import "./sidebar.css";

export default function Sidebar() {
 

  return (
    <div className="sidebar">
      <div className="">
        <h3 className="title">CATEGORIES</h3>
        {categories.map((item,id)=>(
          
        <ul className=""key={id} >

          <li className="">
          <img className="icons" src={item.icon} alt=""/>

            <Link className="link" to={`/postsList/${item.cat}`}>
                {item.title}
            </Link>
          </li>
        </ul>
          ))}
      </div>
     
    </div>
  );
}