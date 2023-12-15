import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="#"><span className='logo-name'>HostelBook</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto ">
              <li className="nav-item">
                <Link className="nav-link active nav-hover-1 px-4 " aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active ms-4 nav-hover-1 px-4" to="/room">Rooms</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4 nav-hover-1 px-4" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4 nav-hover-1 px-4" to="/myroombook">MyRooms</Link>
              </li>


            </ul>



            {user?.name ? null : (<>
              <button className="btn btn-outline-primary ms-5 px-2">
                <Link className="nav-link  active " to="/signup">SignUp</Link>
              </button><br /><br />


              <button className=" btn  btn-outline-primary me-2 ms-2  px-2">
                <Link className="nav-link  active " to="/login">Login</Link>
              </button>



            </>)}


           

            <div className='username-profile'>
              <span> <img src={user?.image} className='user-profile ms-1' /></span>
              <span className='fs-5'>{user?.name || <img className='user-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7WjONaOfilXR3bebrfe_zcjl58ZdAzJHYw&usqp=CAU' />}</span>



            </div>



            {user?.name ? <span className=" ms-2 p-1 fs-5 ">
              <span onClick={() => {
                localStorage.removeItem('user')
              }}> <button className=" btn  bg-danger me-2   px-2">
                  <Link className="nav-link  active text-light " to="/login">
                    Logout
                  </Link>
                </button>
              </span>
            </span> : null}





          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
