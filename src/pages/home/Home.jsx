import React from 'react'
import Navba from '../../components/navbar/Navbar';
import Sidebar from  "../../components/sidebar/Sidebar";
import './home.css';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';
import Announcement from "../../components/announcement/Announcement"
import Products from '../../components/products/Products';
const Home = () => {
  return (
    <div className='home'>
     <Announcement/>  
       <Navba/>
       <div className='LR'>
       <div className='slider'>
       <Slider/>
       </div>
       <div className='sidebar'>
       <Sidebar/>
       </div>
       </div>
       <Products/>
        <Footer/>
    </div>
  )
}

export default Home