import React, { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'
import Footer from '../../component/Footer/Footer'
import axios from 'axios'

const Home = () => {

  const [user, setUser] = useState('')
  const [reviews, setReview] = useState([])

  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')


  const loadAllReview = async () => {

    const response = await axios.get('api/v1/reviews')

    console.log(response?.data?.data)

    setReview(response?.data?.data)

  }


  useEffect(() => {
    loadAllReview()

  }, [])

  const Postreview = async () => {

    const response = await axios.post('api/v1/reviews', {
      user: user?._id,
      description: description,
      rating: rating

    })

    alert(response?.data?.message)

  }


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    setUser(user)

    if (user?.role === 'admin') {
      window.location.href = '/adminroom'
    }

  }, [])






  return (
    <div>
      <Navbar />



      <div className='p-1 home-container  py-5'>
        <div className=' row'>

          <div className='col-md-6'>

            <div className='ps-3'>
              <h2>HOSTELBOOK</h2>
              <p className='fs-2 '>Amazing hostel for students .....</p>
              <p className='fs-5 text-dark '>A hostel is a lower-priced inn of sorts that offers basic, shared accommodations. Typically, a hostel features a large room with separate beds, a shared bathroom, and a communal kitchen. Some hostels have private rooms, but the lower-cost ones generally offer bunk beds.</p>
            </div>

          </div>

          <div className='col-md-6'>

            <div className=''>

              <img src="https://www.greenvilleonline.com/gcdn/presto/2021/02/22/PGRE/dfe5ab88-a835-4f9a-873a-d40e7708881c-0321_TG_Modal_02.JPG?crop=2399,1350,x0,y0&width=660&height=372&format=pjpg&auto=webp" alt="hostel-img" className='home-hostel-img' />
            </div>

          </div>


        </div>
      </div><br />

      <div className='description-container'>

        <div class="description-img-container">
          <img src="https://budgettraveller.org/wp-content/uploads/2017/10/1.B8-a.jpg" className='description-img-home' alt="description-img" />

          <img src="https://i.pinimg.com/736x/d3/17/22/d317227a4e7424a80cc15f9b18075852.jpg" className='sub-description-img'/>

        </div>
        <div className='description-home'>

          <h2 className='mt-4'> All the rooms are spacious with three accommodation</h2>
          <p className='fs-4'>All the rooms are spacious with three seated accommodation, having almost independent and exclusive living and study areas for each inmate. A separate dining hall including a centralized kitchen with an area of over 7500 sq.
          </p>
          <button className='read-more-btn'>Read More ....</button>

        </div>


      </div>

     












      <div>
        <h1 className='text-center'>What People Say About Us </h1>

        <div className='d-flex justify-content-evenly flex-wrap'>
          {
            reviews?.map((review, i) => {

              const { createdAt, rating, description } = review
              const user = review?.user?.name
              const date = new Date(createdAt).toLocaleDateString()
              const time = new Date(createdAt).toLocaleTimeString()

              return (
                <div className='container-review p-2' >

                  <div className='d-flex'>

                    <img src={review?.user?.image} height="50px" width="50px" alt="user" className='mt-2 p-1 rounded-circle border border-danger' />

                    <div className='ms-2 '>
                      <span className='fs-4 mt-2'>{user}</span><br />

                    </div>
                  </div>

                  <p className='fs-5'>{rating}</p>
                  <p className='mt-3'>{description}</p>
                  <div className='d-flex justify-content-between'>
                    <p>{date}</p>
                    <p>{time}</p>
                  </div>

                </div>

              )
            })
          }
        </div>


        <div className='review-container m-2'>
          <form>
            <input placeholder='Enter your review here....' className='input-box' type="text" value={description} onChange={(e) => {
              setDescription(e.target.value)
            }} />
            <input placeholder=' Enter rating here ....' className='input-box' type="text" value={rating} onChange={(e) => {
              setRating(e.target.value)
            }} />
            <button className='btn btn-primary ms-3' type="button"


              onClick={() => {
                Postreview()
              }}
            >Add Review</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
