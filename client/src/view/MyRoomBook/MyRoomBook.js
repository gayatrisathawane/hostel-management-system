import React, { useEffect, useState } from 'react'
import './MyRoombook.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import axios from 'axios'
// import Link from 'react-router-dom' 

const MyRoomBook = () => {
  const [userlocal,setUserLocal]=useState({})
  const [user,setUser] = useState({});
  const [rooms,setRooms] = useState([]);

  // const storeuser = JSON.parse(localStorage.getItem('user'))

  const loadRooms = async () => {
    // const userId = user._id;
    // if(!userId){
    //   return;
    // }
     try{
      const response = await axios.get(`/api/v1/bookrooms/user/657c3be14c9d42524e510f0d`);
    setRooms(response?.data?.data);
     }catch(erro){
      console.log(erro)
     }
  }
  console.log(rooms)
  // useEffect ( () => {
    
  // },[]);

  // const loadUserDataLS = ()=>{

  //   const storageUse = JSON.parse(localStorage.getItem('user') ||'{}');
  //    if(storageUse){
  //     setUserLocal(storageUse._id)
  //    }

  // }
  useEffect( () =>{
    // loadUserDataLS()
    // if(storageUse?.email){
    //   setUser(storageUse);
    
    // }
    // else{
    //   alert("You are not logged in");
      // ="/login";
    // }
    loadRooms();
  },[])
  console.log(userlocal)

  return (
    <div>
      <Navbar/>
       <h2>This Room is Booked</h2>
       <div>
        {
         rooms.map((room, index)=>{
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
