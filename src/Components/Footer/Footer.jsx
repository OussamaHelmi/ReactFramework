import React from 'react'
import './Footer.css'
export default function Footer() {
  return ( 
    // fixed-bottom
   <footer className=' bg-light'>     
    <div id="footer-bg">
    <div className='container'>
    <div  className="row text-center text-white p-4">
        <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
           <ul className="d-flex flex-row gap-3 justify-content-center align-items-center">
          <li><span><i className="fa-brands fa-facebook fs-5"/></span></li>
          <li><span><i className="fa-brands fa-instagram fs-5" /></span></li>
         <li><span ><i className="fa-brands fa-twitter fs-5" /></span></li>
         <li><span><i className="fa-brands fa-linkedin fs-5" /></span></li>
         </ul>

        </div>
        <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
    </div>
    </div>
    <div className='bg-dark text-white text-center p-3 fs-6'>
    <p>Copyright © Your Website {new Date().getFullYear()}</p>
   </div>
  
   </footer>
  )
}
