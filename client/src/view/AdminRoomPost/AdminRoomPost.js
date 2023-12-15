import './AdminRoomPost.css'
import Navbar from '../../component/Navbar/Navbar'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import showToast from 'crunchy-toast'

const AdminRoomPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState('');
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [candidate, setCandidate] = useState("")
    const [image, setimage] = useState('');
    const [rooms, setRooms] = useState([]);

    const addRoom = async () => {

        try {
            const response = await axios.post("/api/rooms", {
                title: title,
                description: description,
                type: type,
                price: price,
                candidate: candidate,
                image: image
            });

            // alert(response?.data?.massage)
            if (response?.data?.success) {
                window.location.href = "/room"
            }
        }
        catch (err) {
            alert(err.massage)
        }


    }
    const loadAllRooms = async () => {
        const response = await axios.get('/api/rooms');
        setRooms(response?.data?.data);
        console.log(response?.data?.data)
    }

    useEffect(() => {
        loadAllRooms();
    }, [rooms])
 

    return (
        <>
            <div className='admin-page'>
                <Navbar />
                <div className='d-flex justify-content-evenly'>
                    <form className='post-room-form'> <div>
                        <h2>Add Room</h2>
                        <label>Title</label><br />
                        <input type="text"
                            placeholder="Enter title here.."
                            id="title"
                            className="input"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }} />
                    </div><br />

                        <div>
                            <label>Add description</label><br />
                            <input type="text"
                                placeholder="Add description"
                                id="description"
                                className="description-input"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }} />
                        </div><br />

                        <div>
                            <label>Add room charges</label><br />
                            <input type="number"
                                placeholder="10000, 2000 etc"
                                id="price"
                                className="input"
                                value={price}
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }} />
                        </div><br />

                        <label>Select Room Type</label>
                        <br />
                        <select
                            className='select-box input'
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value)
                            }}
                        ><br />



                            <option>Select </option>
                            <option value="furnish" >Furnish</option>
                            <option value="unfurnish">Unfurnish</option>
                            <option value="semi-furnish">Semi-Furnish</option>

                        </select>


                        <div><br />
                            <label>Allow Candidates</label><br />
                            <input type="text"
                                placeholder="1/2 etc."
                                id="candidate"
                                className="input"
                                value={candidate}
                                onChange={(e) => {
                                    setCandidate(e.target.value);
                                }} />
                        </div><br />

                        <div>
                            <label>Add image url</label><br />
                            <input type="text"
                                id="image"
                                className="input"
                                value={image}
                                onChange={(e) => {
                                    setimage(e.target.value);
                                }} />
                            <br /><br />


                            <button type="button"
                                className="singup-btn"
                                onClick={addRoom}>

                                Add Room
                            </button>

                        </div></form>
                    <div className='all-links-container mt-5'>

                        {
                            rooms?.map((roomObj, index) => {
                                const { title,
                                    _id,
                                    description,
                                    type,
                                    price,
                                    candidate,
                                    image } = roomObj;

                                return (

                                    <div className='room-card-1 p-2 d-flex justify-content-between mt-4'>
                                        <div className='img'>
                                            <img src={image} alt='room-img' className='img' />
                                        </div>
                                        <div className='details'>

                                            <h4>{title}</h4>
                                            <h5>Type : {type}</h5>
                                            <p className='description'>Description : {description}</p>
                                            <h5>Rent :  {price}</h5>
                                            <h6>Allow Candidate : {candidate}</h6></div>

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </>
    )
}
export default AdminRoomPost 