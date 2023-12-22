import React, { useEffect, useState } from 'react'
import './MyRoombook.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import axios from 'axios'
// import User from '../../../../server/models/user'

// import Link from 'react-router-dom' 

function MyRoomBook () {

 const [user,setUser] = useState({});
 const [rooms, setRooms] = useState([]);

 const loadBookrooms = async () =>{
  const userId = user._id;
    if(!userId){
       return;
    }
  const response = await axios.get(`/api/v1/bookrooms/user/${userId}`);
  setRooms(response?.data?.data);
 }


 useEffect(() => {
  loadBookrooms();
 },[user]);


 useEffect( () =>{
  const storageUse = JSON.parse(localStorage.getItem("user") || '{}')
    if(storageUse?.email){
      setUser(storageUse);
    
    }
    else{
      alert("You are not logged in");
      window.location.href ="/login";
    }
  },[])

  return (
    <div>
      <Navbar/>
       <h2 className='myroombook-heading'>This Room is Booked</h2>
       <div>
        {
         rooms?.map((singleroom, index)=>{
          const {room} = singleroom;
          return(
            <div key={index}  className='roombook-cont'>
           
             <img className='room-image' src= {room.image}/>

             <div className='room-inform'>
              <p className='room-title'>{room.title}</p>
              <p className='room-candidate'>Candidate : {room.candidate}</p>
              <p className='room-price'>Total Price {room.price}*{room.candidate}={room.price * room.candidate}</p>

             </div>
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



// // const [userlocal,setUserLocal]=useState({})
//   // const [user,setUser] = useState({});
//   const [room,setRoom] = useState([]);
//   const [id, setId] = useState(0)
//   const [user,setUser] = useState({});

//   // const storeuser = JSON.parse(localStorage.getItem('user') || '{}')

//   // const loadRooms = async () => {
//   //   const userId = storeuser._id;
//   //   if(!userId){
//   //     return;
//   //   }
//   //    try{
//   //     const response = await axios.get(`/api/v1/bookrooms/user/${userId}`);
//   //   setRooms(response?.data?.data);
//   //    }catch (err) {
//   //     console.error("Error fetching room data:", err);
//   //   }
    
//   // };
//   // console.log(rooms);

//   // useEffect(()=>{
//   //   loadRooms();
//   // }, []);

//   // const loadUserDataLS = ()=>{

//   //   const storageUse = JSON.parse(localStorage.getItem('user') ||'{}');
//   //    if(storageUse){
//   //     setUserLocal(storageUse._id)
//   //    }

//   // }
//  // useEffect( () =>{
//     // loadUserDataLS()
//     // if(storageUse?.email){
//     //   setUser(storageUse);
    
//     // }
//     // else{
//     //   alert("You are not logged in");
//       // ="/login";
//     // }
//   //  loadRooms();
//   //},[])
//   // console.log(userlocal)

//   const loadBoodedRooms = async () => {
//     const response = await axios.get(`/api/v1/bookrooms/user/${id}`); 
//     // const roomData = response?.data?.data;
//     setRoom(response?.data?.data);

// };

// useEffect(() => {
//   loadBoodedRooms();
// }, [user]);

//   return (
//     <div>
//       <Navbar/>
//        <h2>This Room is Booked</h2>
//        <div>
//         {
//          room?.map((singleroom, index)=>{
//           const {room, price,candidate} = singleroom;
//           return(
//             <div key={index}>
//               <h1>{room.title}</h1>
//               <h1>{room.description}</h1>
//               <h3>{room.candidate}</h3>
//             </div>
//           )
//          })
//         }
//        </div>
//       <Footer />
//     </div>
//   )
// }

// export default MyRoomBook
