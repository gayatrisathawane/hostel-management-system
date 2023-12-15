import './AdminRoomPost.css'
import Navbar from '../../component/Navbar/Navbar'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

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
            })

            // alert(response?.data?.massage)
            if (response?.data?.success) {
                window.location.href = "/room"
            }
        }
        catch (err) {
            alert(err.massage)
        }


    }
 

    return (
        <>
            <div className='admin-page'>
                <Navbar />
                <div>
                    <form className='post-room-form'> <div>
                        <h2>Add Room</h2>
                        <label>Title</label><br />
                        <input type="text"
                            placeholder="Enter title here.."
                            id="title"
                            className="from-control"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }} />
                    </div><br />

                        <div>
                            <label>Add description</label><br />
                            <input type="text"
                                placeholder="Add descriptin"
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
                                className="from-control"
                                value={price}
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }} />
                        </div><br />

                        <label>Select Room Type</label>
                        <br />
                        <select
                            className='select-box'
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
                            <label>How many Candidates</label><br />
                            <input type="text"
                                placeholder="1/2 etc."
                                id="candidate"
                                className="from-control"
                                value={candidate}
                                onChange={(e) => {
                                    setCandidate(e.target.value);
                                }} />
                        </div><br />

                        <div>
                            <label>Add image url</label><br />
                            <input type="text"
                                id="image"
                                className="from-control"
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
                   

                </div>

            </div>
        </>
    )
}
export default AdminRoomPost 