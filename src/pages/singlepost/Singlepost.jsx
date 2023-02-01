import React from 'react'
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlepost.css"
import Announcement from "../../components/announcement/Announcement"
import Navbar from "../../components/navbar/Navbar"
import { publicRequest, userRequest } from "../../requestMethods";
import { useSelector } from 'react-redux';


const Singlepost = () => {
  const [update, setUpdate]=useState(false);
  const [title, setUpdatetext]=useState('');
  const [desc, setUpdatedesc]=useState('');



  const user=useSelector(state=>state.user.currentUser)
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await publicRequest.get("/posts/find/" + id);
        setPost(res.data);
      } catch { }
    };
    getPost();
  }, [id]);

  const handleDelete=  async ()=>{
    try {
      await userRequest.delete(`/posts/${post._id}`)
window.location.replace("/");
    } catch (error) {
      console.log(error)
    }

  }
  const handleUpdate= async()=>{
    try {
      await userRequest.put(`/posts/${post._id}`,{
        title,
        desc
      })
      window.location.replace(`/singlePost/${post._id}`)
      setUpdate(false)
    } catch (error) {
      console.log(error);
      
    }

  }

  const PF="http://localhost:5000/images/"

  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div className='LF'>
        <div className='left'>
            <img src={PF + post.img} className='image' alt="" />
        
        </div>
        {update ? (
           <div className='right'>
            
           <h2 className='title'> Title:
           <input type='text'  className="upinput" placeholder='UpdateTitle'  onChange={(e)=>setUpdatetext(e.target.value)}/>
           </h2>
       
           
           <div> sharing time:10:00</div>
           <div className='desc'>Description 
           <textarea type='text'  className="upinputA" placeholder='UpdateDesc' onChange={(e)=>setUpdatedesc(e.target.value)}/>
           </div>
           <div> 
               <div>Donor Information</div>
               <img src="https://i.imgur.com/sjLMNDM.png"className='logo' alt="" />
               <div>Name:</div>
               <div>Number:</div>
               <div>Email or Facebook ....: haroung75@gmail.com</div>
               <div>Location: jendouba</div>
           </div>
       </div>
        ):(
        <div className='right'>
            <h2 className='title'> Title:{post.title}</h2>
            <div> sharing time:10:00</div>
            <div className='desc'>Description {post.desc}</div>
            <div> 
                <div>Donor Information</div>
                <img src="https://i.imgur.com/sjLMNDM.png"className='logo' alt="" />
                <div>Name:</div>
                <div>Number:</div>
                <div>Email or Facebook ....: haroung75@gmail.com</div>
                <div>Location: jendouba</div>
            </div>
        </div>
        )}
        </div>
        {post.username === user?.username && (
        <div className='btnbtn'>
          <button className='btn1' onClick={handleDelete}>Delete</button>
         {! update ? ( <button className='btn2'   onClick={() => setUpdate(true)}>Uapdate</button>): null}
         {update ? ( <button className='btn2' onClick={handleUpdate}>UapdateF</button>): null}

        </div>
        )}
    </div>
  )
}

export default Singlepost