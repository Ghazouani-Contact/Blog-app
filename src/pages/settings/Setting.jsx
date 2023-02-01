import "./setting.css";
import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Navba from "../../components/navbar/Navbar";
export default function Settings() {
  return (
    <div>
        <Announcement/>
        <Navba/>
    
    <div className="settings">
        
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <h3 className="settingsTitleUpdate">Update Your Account</h3>
          <h3 className="settingsTitleDelete">Delete Account</h3>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
            </label>
            <input
              id="fileInput"
              type="file"
              style={{width :'120px' ,margin:'10px' }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}