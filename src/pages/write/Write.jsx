import React from "react";
import Navba from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";

import "./write.css";
import {useState } from "react";
import { userRequest } from "../../requestMethods";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Write() {
  const [file, setFile] = useState(null);
  const[title,setTitle]=useState("");
  const[desc, setDesc]=useState("");
  const[categories,setCategories]=useState([]);
  const user = useSelector((state) => state.user.currentUser);

   const handleSubmit= async(e)=>{
    e.preventDefault();
   
    const newPost = {
      title,
      desc,
      categories,
      username:user.username,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.img = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {console.log(err)}
    }
   if(user) {
        try {
          const  res= await userRequest.post("/posts",newPost);
          window.location.replace("/");
       
        } catch (error) {
          console.log(error);
          
        }
      } else {
        alert('login first')
      }
   };

  
  return (
    <div>
      <Announcement/>
            <Navba/>

    <div className="write">
      {file && (
      <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""
      />
      )}
      <form className="writeForm"onSubmit={handleSubmit} >
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          </label>
          <input id="fileInput" type="file" style={{width :'120px' ,margin:'10px' }}
          onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e)=>setTitle(e.target.value)}
            required
          />
        </div>
        <div className="writeFormGroup">
        <div className="">
                    <label></label>
                    <select name="Categories" className="writeInput" required onChange={(e)=>setCategories(e.target.value)}>
                       <option value="">Choose one of them:</option>
                       <option value="education">EDUCATION</option>
                        <option value="service">SERVICE</option>
                        <option value="covoiturage">COVOITURAGE</option>
                        <option value="appartement">LOCATION APPARTEMENT</option>
                        <option value="informatique">ACCESSOIRE INFORMATIQUE</option>
                   </select>
                </div>
          
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e)=>setDesc(e.target.value)}
            required
          />
        </div>
       
        <button className="writeSubmit" type="submit" >
          Publish
        </button>
      
      </form>
    </div>
    </div>

  );
}