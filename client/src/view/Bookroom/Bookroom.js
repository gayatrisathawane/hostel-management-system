import React, { useEffect, useState } from 'react'
import Navbar from './../../component/Navbar/Navbar'
import axios from 'axios'
import './Bookroom.css'
import { useParams } from 'react-router-dom';

function Bookroom() {

  const [room, setRoom] = useState({});
  const[candidate,setcandidate]=useState('')
  //  const [search, setSearch] = useState([]);

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

  const { id } = useParams();

  const loadRoom = async () => {
    const response = await axios.get(`/api/v1/rooms/${id}`)
    setRoom(response?.data?.data)
    console.log(response?.data?.data)
  }
useEffect(()=>{
  loadRoom();
},[])


const user = JSON.parse(localStorage.getItem('user'))



const booknow = async () => {
  try{
    
  const response = await axios.post('/api/v1/bookrooms', {
    user: user._id,
    room: room._id,
    candidate: candidate,
  });

  alert(response?.data?.message);
  if (response?.data?.success) {
    window.location.href = "/myroombook"
  } 
}catch (err) {
alert(err.massage)
}

};
  return (

    <div>
      <Navbar />
      <p className='text-center mt-3 fs-1' >Room Details</p>
      <div className=' d-flex bookRoom-container p-5'>
       

        <div>
        <img src={room?.image} alt={room?.type}   width="430px" height="450px"/>
        </div>

        <div className='ms-5'>
        <h3 className='fs-3'>{room.title}</h3>
       
      <p className='fs-4'> Type:{room.type}</p>
      <p className='fs-4'> Description: {room.description}</p>
      <p className='fs-4 text-danger'>Price: {room?.price}</p>
      <p>Total charge: {room?.price} </p>
      <p className='fs-5'> Candidate: <input type="Number" value={candidate} onChange={(e)=>{
        setcandidate(e.target.value)
      }}/></p>

<button className='singup-btn' onClick={booknow}>
          Book Now
        </button>

        </div>
      
      


      </div>

     
   

      
    </div>

  )
}

export default Bookroom