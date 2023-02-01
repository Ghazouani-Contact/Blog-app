import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
    <footer> 
        <div className="f-item-con">
            <div className="app-info">
                <span className='app-name'>
                    <span className='app-initial'>B</span>log
                </span>
                <p>We provides you with <strong>Well organised</strong>  <strong></strong> Website Designs.</p>
            </div>
            <div className="useful-links">
                <div className="footer-title">Useful Links</div>
                <ul>
                    <li>Courses</li>
                    <li>Sign In</li>
                    <li>About Us</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise with Us</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            
            <div className="g-i-t">
                <div className="footer-title">Get in Touch</div>
                <form action="/" method="post" className="space-y-2">
                    <input type="text" name="g-name" className="g-inp" id="g-name" placeholder='Name' />
                    <input type="email" name="g-email" className="g-inp" id="g-email" placeholder='Email' />
                    <textarea type="text" name="g-msg" className="g-inp h-40" id="g-msg"
                        placeholder='Message...'></textarea>
                    <button type="submit" className='f-btn'>Submit</button>
                </form>
            </div>
        </div>
    </footer>

</div>
  )
}

export default Footer