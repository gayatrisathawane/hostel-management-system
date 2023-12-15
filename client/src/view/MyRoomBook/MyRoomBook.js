import React, { useEffect, useState } from 'react'
import './MyRoombook.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import axios from 'axios'
// import Link from 'react-router-dom' 

const MyRoomBook = () => {
  const [user,setUser] = useState({});
  const [rooms,setRooms] = useState([]);

  // const storeuser = JSON.parse(localStorage.getItem('user'))

  const loadRooms = async () => {
    const userId = user._id;
    if(!userId){
      return;
    }
     const response = await axios.get(`/api/v1/bookrooms/user/${userId}`);
       setRooms(response?.data?.data);
  }
  useEffect ( () => {
    loadRooms();
  },[user]);

  useEffect( () =>{
    const storageUse = JSON.parse(localStorage.getItem('user') ||'{}');
    if(storageUse?.email){
      setUser(storageUse);
    }
    else{
      alert("You are not logged in");
      window.location.href ="/api/signup";
    }
  },[])

  return (
    <div>
      <Navbar/>
       <h2>This Room is Booked</h2>
       <div>
        {
         rooms?.map((room, index)=>{
          const {title, price} = room
          return(
            <div>
              <h1>{title}</h1>
              <h1>{price}</h1>
            </div>
          )
         })
        }
       </div>
      <Footer />
    </div>
  )
}

export default MyRoomBook
