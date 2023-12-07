import React from 'react'
import './Roomcard.css'
import { Link } from 'react-router-dom'


function Roomcard({ id, title, description, price, type, candidate, image }) {

  return (
    <div className='room-card'>
      <div className='roomcard-container'>
        <div className='d-block mx-auto'>
          <img src={image} className='room-card-image' />
        </div>

        <div className=' p-2'>
          <p className='room-card-name fs-5'>{title}</p>
            <p className='fs-4'> {type}</p>
          <p className='room-card-price'>₹ {price}</p>

         <Link to={`/book/${id}`} className='room-card-btn '>View Details</Link>

        </div>

       
      </div>
    </div>
  )
}

export default Roomcard