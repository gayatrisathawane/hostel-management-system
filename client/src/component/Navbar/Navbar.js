import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user') ||'{}')
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-light shadow-sm p-3 m-0">
  <div className="container-fluid">
    <Link className="navbar-brand fs-4" to="#">HOSTELBOOK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto">
        <li className="nav-item">
          <Link className="nav-link active fs-4" aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link fs-4 active ms-4" to="/room">Rooms</Link>
        </li>
     <li className="nav-item">
          <Link className="nav-link fs-4 active ms-4" to="/contact">Contact</Link>
        </li> 
       
        
      </ul>


    
      <button className="btn btn-outline-primary ms-5 p-2 fs-5 ">
          <Link className="nav-link  active "  to="/signup">SignUp</Link>
        </button><br/><br/>
    
         
        <button className=" btn btn-outline-primary me-5 ms-5  p-2 fs-5 ">
          <Link className="nav-link  active "  to="/login">Login</Link>
        </button>


        <p><span className='fs-4'>Hello,{user?.name || 'User !'}</span></p>



      { user?.name ? <span className="  me-5 ms-5  p-2 fs-5 ">
        <span onClick={()=>{
          localStorage.removeItem('user')
        }}> <Link className="nav-link  active "  to="/login"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkYaqjKpuGaWpuBNKEx0wELO12LyLEvW1TQ&usqp=CAU" height="40px" alt="logout"/></Link></span> 
        </span>:null}
       
     
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
