import React from 'react'
import './Roomcard.css'
import { Link } from 'react-router-dom'


function Roomcard({ id, title, description, price, type, candidate, image }) {

  return (
    <div className='room-card'>
      <div className='roomcard-container'>
        <div className='p-2'>
          <img src={image} className='room-card-image' />
        </div>

        <div className='ms-5 p-2'>
          <h1 className='room-card-name'>{title}</h1>
          <p>🛌 {description}</p>
          <p>🏠  {type}</p>
          <p>👤 {candidate}</p>
          <p className='room-card-price'>₹ {price}</p>

         <Link to={`/book/${id}`} className='room-card-btn '>View Details</Link>

        </div>

       
      </div>
    </div>
  )
}

export default Roomcard