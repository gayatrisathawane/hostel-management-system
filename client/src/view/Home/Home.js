import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'
import Footer from '../../component/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container home-container mt-5 py-5'>
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

             <img src="https://www.greenvilleonline.com/gcdn/presto/2021/02/22/PGRE/dfe5ab88-a835-4f9a-873a-d40e7708881c-0321_TG_Modal_02.JPG?crop=2399,1350,x0,y0&width=660&height=372&format=pjpg&auto=webp" alt="hostel-img" className='home-hostel-img'/>
            </div>

          </div>


        </div>
      </div><br/>
    <Footer/>
    </div>
  )
}

export default Home
