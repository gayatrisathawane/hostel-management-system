import React, { useEffect, useState } from 'react'
import Navbar from './../../component/Navbar/Navbar'
import axios from 'axios'
import Bookcards from './../../component/Bookcard/Bookcard';
import './Bookroom.css'

function Bookroom() {
 
const[book, setBook] = useState([]);
// const [search, setSearch] = useState([]);

// const searchBooks = async () =>{
// if(search === ''){
//   loadBooks();
//   return;
// }
// const response = await axios.get(`/api/searchroom?q=${search}`)
// setBook(response?.data?.data);
// }

// useEffect(() =>{

// },[search])

const loadBooks = async ()=>{
  try{
const response= await axios.get('/api/rooms');
setBook(response?.data?.data);
  }
  catch(e){
   console.log(e)
    alert('Error loading products');
  }
};

useEffect(()=>{
  loadBooks();
},[])

  return (
 
    <div>
      <Navbar/>

{/* <input type='text'
 placeholder='Search'
  className='search-bar' 
  onChange={(e) => {
    setSearch(e.target.value)
  }}
  /> */}

      <div className='book-container'>
{
  book?.map((book,index)=>{
    const {_id, title, description, price,type,category, image}=book
    return(
      <Bookcards key={index}
      name={title}
      type={type}
      category={category}
      description={description}
      price={price}
      image={image}
      id={_id}
      />
    )
  })
} 
</div>
      </div>
  
  )
}

export default Bookroom