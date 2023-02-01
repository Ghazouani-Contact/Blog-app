/*
import React from 'react'
import { useState } from 'react'
import Announcement from '../../components/announcement/Announcement'
import Navba from '../../components/navbar/Navbar'
import axios from "axios"
import { useSelector } from 'react-redux'

const UpdateP = (e) => {
  
    const [title , setTitle]=useState('');
    const [desc , setDesc]=useState('');
    const [cat , setCat]=useState([]);
    const user= useSelector((state)=>state.user.currentUser)

    const update= async()=>{
        try {
            await axios.put(`posts/${id}`,{
                username: user.username,
                title,
                desc,
                cat
            })
            window.location.replace("/");
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <Announcement/>
            <Navba/>

    <div className="write">
    
      <img
        className="writeImg"
        src=""
        alt=""
      />
     
      <form className="writeForm" onSubmit={update} >
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          </label>
          <input id="fileInput" type="file" style={{width :'120px' ,margin:'10px' }}
         
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          onChange={ setTitle(e.target.value)}
            required
          />
        </div>
        <div className="writeFormGroup">
        <div className="">
                    <label></label>
                    <select name="Categories" className="writeInput" required onChange={ setCat(e.target.value)}
>
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
            onChange={ setDesc(e.target.value)}

            required
          />
        </div>
       
        <button className="writeSubmit" type="submit"  >
          Update
        </button>
      
      </form>
    </div>
    </div>
  )
}

export default UpdateP */