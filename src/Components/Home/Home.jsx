import React from 'react'

export default function Home(){
return (
   <section  id="forbg">
    <div className="container">
        <div className="row text-center text-white py-4">
        <img className='w-25 m-auto pt-5' src="src\assets\home.svg" alt="" />
        <h2 className='fs-1 pt-5'>START FRAMEWORK</h2>
        <div className="star-icon p-4">
        <i className="fa-solid fa-star"/>
        </div>
        <ul className='d-flex justify-content-center align-items-center gap-2 '>
            <li><p>Graphic Artist -</p></li>
            <li><p> Web Designer -</p></li>
            <li><p> Illustrator</p></li>
          
        </ul>
    </div>
    </div>
    
   </section>
)
}