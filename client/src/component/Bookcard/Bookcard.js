import React from 'react'
import './Bookcard.css'

function Bookcard({title, description, price,type,category, image}) {

  

  return (
    
    <div className='book-card'>
      
<img src={image} className='book-card-image'/>
<h1 className='book-card-name'>{title}</h1>
<h2>{type}</h2>
<h3>{category}</h3>
<p>{description}</p>
<h1 className='book-card-price'>₹ {price}</h1>



    </div>
  )
}

export default Bookcard