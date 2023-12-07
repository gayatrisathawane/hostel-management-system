import React, { useState,useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Room.css'
import Footer from './../../component/Footer/Footer'
import axios from 'axios'
import Roomcards from './../../component/Roomcard/Roomcard'

function Room() {

  const[rooms, setRooms] = useState([]);
  const [search, setSearch] = useState([]);

  const searchRooms = async () =>{
    if(search === ''){
      loadRooms();
      return;
    }
    const response = await axios.get(`/api/searchroom?q=${search}`)
    setSearch(response?.data?.data);
    }
    
    useEffect(() =>{
    
    },[search])


   

    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('user') || '{}')

      if(!user?.email){
        alert('you are not logged')
        window.location.href='/login'
      }


    },[])
    
    const loadRooms = async ()=>{
      try{
    const response= await axios.get('/api/rooms');
    setRooms(response?.data?.data);
      }
      catch(e){
       console.log(e)
        alert('Error loading rooms');
      }
    };
    
    useEffect(()=>{
      loadRooms();
    },[])

  return (
    
    <div>
      <Navbar/>

      <div>
  
  <input type='text'
   placeholder='Search'
    className='search-bar' 
    onChange={(e) => {
      setSearch(e.target.value)
    }}
    />
  </div>

<div className='rooms-container'>
{
  rooms?.map((room,index)=>{
    const {_id, title, description, price,type,candidate, image}=room
    return(
      <Roomcards key={index}
      title={title}
      description={description}
      price={price}
      image={image}
    type={type}
    candidate={candidate}
    id={_id}
      />
    )
  })
} 
</div>
     <Footer/>
  </div>
  
  )
}

export default Room