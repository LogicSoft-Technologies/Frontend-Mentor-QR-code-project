import React from 'react'
import './Card.css'
import image from '../assets/image-qr-code.png'

const Card = () => {
  return( 
    <div className='background'>
    <div className='card'>
         <img className='card-img' src={image} alt="" />
         <h2 className='card-title'>
            Improve your front-end skills
            by building projects
         </h2><br />
         <p>
            Scan QR code to visit Frontend Mentor and
            take your coding skills to the next level
         </p>
    </div>
    </div>
)
}

export default Card