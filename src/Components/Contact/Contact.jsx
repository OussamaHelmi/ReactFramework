import React from 'react'
import  styles from  './Contact.module.css'

export default function Contact() {
  return (
    
    <div className={`${styles.container} text-center text-dark p-4`}>
     <h2 className={`${styles.conTitle} fs-1 pt-5`}>CONTACT SECTION</h2>
      <div className={`${styles['star-icon-co']} p-4`}>
        <i className="fa-solid fa-star"></i>
     
      </div>
  <div className="row py-5">
    <div className="col-md-6 m-auto pt-5 ">
        <input type='text' placeholder='userName' name='userName'  className='form-control'/><br/>
        <input type='number' placeholder='userAge' name='userAge'  className='form-control'/><br/>
        <input type='Email' placeholder='userEmail' name='userEmail'  className='form-control'/><br/>
        <input type='number' placeholder='userPassword' name='userPassword'  className='form-control'/><br/>
        <div className="text-start">
        <button type="submit" className="btn btn-success">Send Message</button>
        </div>

    </div>
  </div>
    </div>
  )
}
