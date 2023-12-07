import React from 'react'
import './Bookcard.css'

function Bookcard({title, description, price,type,category, image}) {

   const booknow = async()=>{
    
    alert ('Booking Successfully');
    window.location.href='/'

   }

  return (
    
    <div className='book-card'>
      
<img src={image} className='book-card-image'/>
<h1 className='book-card-name'>{title}</h1>
<h2>{type}</h2>
<h3>{category}</h3>
<p>{description}</p>
<h1 className='book-card-price'>₹ {price}</h1>

<button className='book-now-btn ' onClick={booknow}>Book Now</button>

    </div>
  )
}

export default Bookcard