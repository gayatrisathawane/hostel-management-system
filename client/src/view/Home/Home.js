import React, { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'
import Footer from '../../component/Footer/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom'


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

      <div className='header'>
      <div className=' home-container'>
        
        <div className='row'>

          <div className='col-md-6'>

            <div className='ps-2 mx-5'>
              <h2 className='heading'><span className='s'>H</span>ostel<span  className='s'>B</span>ook</h2>
              <p className='fs-2 '>Amazing hostel for students .....</p>
              <p className='fs-5 text-light text'>A hostel is a lower-priced inn of sorts that offers basic, shared accommodations. Typically, a hostel features a large room with separate beds, a shared bathroom, and a communal kitchen. Some hostels have private rooms, but the lower-cost ones generally offer bunk beds.</p>
              <button type="button"
            className="mt-5 singup-btn">Book Now</button>
            </div>

          </div>

          <div className='col-md-6'>

            <div className=''>

              <img src="https://img.freepik.com/free-photo/people-with-smartphones-bench_23-2147679114.jpg?size=626&ext=jpg&ga=GA1.1.587441093.1698208905&semt=ais" alt="hostel-img" className='home-hostel-img' />
            </div>

          </div>


        </div>
      </div><br />
<<<<<<< HEAD
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

                    <img src={review?.user?.image} height="50px"  width="50px" alt="user" className='mt-2 p-1 rounded-circle border border-danger' />

                    <div className='ms-2 '>
                      <span className='fs-4 mt-2'>{user}</span><br />
                    
                    </div>

                    {/* <p onClick={()=>{
                deleteReview(user?._id)
              }}>❌</p> */}

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
=======
>>>>>>> c00610b3dc730470116605bdecdec6acf2408774
      </div>

      

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

      
      <div className='img-div'>
        

        <img src="https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-smile-relax-bed_74190-11949.jpg?w=826&t=st=1702669243~exp=1702669843~hmac=249774ae512d129508951153506906294cec0a9fa653ccb3ff6cb49d8d875f74" alt='img' className='signup-img-poster'/>


        <img src='https://img.freepik.com/free-photo/front-view-young-friends-hostel_23-2150598844.jpg?w=826&t=st=1702669912~exp=1702670512~hmac=3f79d75ad721dbe4fb4ac90433d9c6ad058616e940efd5100108ff9d1895c964' alt='img' className='signup-img-poster' />
       

        <img src="https://img.freepik.com/free-photo/young-friends-hostel_52683-121725.jpg?size=626&ext=jpg&ga=GA1.1.587441093.1698208905&semt=ais" alt='img' className='signup-img-poster'/>
       
      </div>

      <div className='img-div'>
        <img src="https://img.freepik.com/premium-photo/group-friends-moving-hostel-smile_94347-177.jpg?size=626&ext=jpg&ga=GA1.1.587441093.1698208905&semt=ais" alt='img' className='signup-img-poster'/>
        <img src='https://img.freepik.com/premium-photo/full-shot-young-women-hostel_23-2150542676.jpg?size=626&ext=jpg&ga=GA1.1.587441093.1698208905&semt=ais' alt='img' className='signup-img-poster' />
       
       <img src='https://img.freepik.com/free-photo/man-bed-with-smartphone_23-2149400011.jpg?size=626&ext=jpg&ga=GA1.1.587441093.1698208905&semt=ais' alt='img' className='signup-img-poster' />
      </div>


      <h1 className='text-center mt-5'>Services</h1>








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


      <div className='footer-head'>
        <h1 className='fs'>Unlock your Hostel Account to Freedom!</h1>
        <Link to="/signup"><button type="button"
            className="singup">
            SignUp
          </button></Link>
          <p className='para'>Do you already have an account? <Link to="/login" >Login</Link></p>
      </div>
      <div className='footer'><Footer /></div>
    </div>
   
  )
}

export default Home
