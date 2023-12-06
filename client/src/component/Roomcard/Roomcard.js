import React from 'react'
import './Roomcard.css'
import {Link} from 'react-router-dom'

function Roomcard({id, title, description, price,type,candidate, image}) {
  
  return (
    <div className='room-card'>
      
<img src={image} className='room-card-image'/>
<h1 className='room-card-name'>{title}</h1>
<p>{description}</p>
<p>{type}</p>
<p>{candidate}</p>
<h1 className='room-card-price'>₹ {price}</h1>

<Link to={`api/book/${id}`}className='room-card-btn '>Book Now</Link>

    </div>
  )
}

export default Roomcard