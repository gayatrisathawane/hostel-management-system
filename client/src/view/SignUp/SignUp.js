import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./SignUp.css"
import Navbar from "../../component/Navbar/Navbar";
import SignUpBg from './SignUpBg.png'
import { Link } from "react-router-dom";




function Signup() {

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("female");
  const [image, setimage] = useState('')
 

  const signupUser = async () => {
    if (!name) {
      alert("Name is requred");
      return;
    }
    if (!mobile) {
      alert("Mobile is requred");
      return;
    }

    if (!lastname) {
      alert("LastName is requred");
      return;
    }

    if (!email) {
      alert("Email is requred");
      return;
    }

    if (!password) {
      alert("Password is requred");
      return;
    }


    const response = await axios.post("/api/signup", {
      name: name,
      lastname: lastname,
      mobile: mobile,
      email: email,
      password: password,
      gender: gender,
      image: image
    })

    alert(response?.data?.message);

    if (response?.data?.success) {

      window.location.href = "/login";
    }


  };

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

    if (storageUser?.email) {
      alert("You are alredy looged in!");
      window.location.href = "/";
    }

  }, [])

  return (
    <>
      <Navbar />


      <div className="signup-main-container">

        <div className="signup-img-container">

          <img src={SignUpBg} className="signup-img" />


        </div>
        <div className="sign-up-details">

          <h1 className="sign-up-heading">Welcome to <span className="blue-color">H</span>ostel<span className="blue-color">B</span>ook</h1>

          <div>
{/* {
  type === user? <h2>User Signup</h2> :<h2>Admin Signup</h2>
} */}
            <div className="d-flex justify-content-evenly">

              <div className="p-2">

                <label htmlFor="name" className="input-label"> First Name</label>
                <input type="text"
                  placeholder="Enter your name"
                  id="name"
                  className="signup-input-field"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }} />

              </div>



              <div className="p-2">


                <label htmlFor="lastname" className="input-label"> Last Name</label>
                <input type="text"
                  placeholder="Enter your name"
                  id="lastname"
                  className="signup-input-field"
                  value={lastname}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }} />
              </div>
            </div>






          </div>


          <div>
            <div className="d-flex">

              <div className="p-2">
                <label htmlFor="mobile" className="input-label" >Mobile</label>
                <input type="text"
                  placeholder="Enter your mobile"
                  id="mobile"
                  className="signup-input-field"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }} />
              </div>

              <div className="p-2">
                <label htmlFor="email" className="input-label">Email</label>
                <input type="email"
                  placeholder="you@example.com"
                  id="email"
                  className="signup-input-field"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }} />
              </div>

            </div>
          </div>




          <div>
            <div className="d-flex">


              <div className="p-2">


                <label htmlFor="password" className="input-label" >Password</label>
                <input type="password"
                  placeholder="Enter 8 characters or mor"
                  id="password"
                  className="signup-input-field"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }} />

              </div>

              <div className="p-2">
                <label htmlFor="image" className="input-label">Image</label>
                <input type="text"
                  id="image"
                  placeholder="Enter your image url"
                  className="signup-input-field"
                  value={image}
                  onChange={(e) => {
                    setimage(e.target.value);
                  }} />

              </div>

            </div>



          </div>

          <div>
            <div className="d-flex">

              <label className="input-label ms-2">Gender :-</label>

              <div>

                <input type="radio"
                  id="male"
                  name="gender"
                  className="gender-input ms-5"
                  checked={gender === "male"}
                  onClick={() => {
                    setGender("male");
                  }}
                />
                <label htmlFor='male' className="fs-4 ms-2">Male</label>


                <input type="radio"
                  id="femlae"
                  name="gender"
                  className="gender-input ms-5"
                  checked={gender === "female"}
                  onClick={() => {
                    setGender("female");
                  }}
                />
                <label htmlFor='female' className="fs-4 ms-2">Female</label>
              </div>

            </div>
          </div>

          

           <button type="button"
            className=" singup-btn"
            onClick={signupUser}>
            SignUp
          </button>

          <Link className="text-decoration-none" to='/login'><p className="fs-5 text-center">Already have an account ?</p></Link>
          

         

         <div>
          </div>
        </div>
      </div>


      {/* <div>
        <div className="signup-container-main">
          <div className="main-container">


            <div className="signup-from-container">
              <div className="signup-from">


                <h4 className="heading">Welcome students!</h4>
                <h1 className="text-center">Sign-Up</h1>


                <div>
                  <label htmlFor="name" className="input-heading">Name</label>
                  <input type="text"
                    placeholder="Enter your name"
                    id="name"
                    className="from-control"
                    value={name}
                    onChange={(e) => {
                      setNmae(e.target.value);
                    }} />
                </div>

                <div>
                  <label htmlFor="mobile" className="input-heading">Mobile</label>
                  <input type="text"
                    placeholder="Enter your mobile"
                    id="mobile"
                    className="from-control"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }} />
                </div>

                <div>
                  <label htmlFor="email" className="input-heading">Email</label>
                  <input type="email"
                    placeholder="you@example.com"
                    id="email"
                    className="from-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }} />
                </div>


                <div>
                  <label htmlFor="password" className="input-heading">Password</label>
                  <input type="password"
                    placeholder="Enter 8 characters or mor"
                    id="password"
                    className="from-control"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }} />
                </div>


                <div>

                  <input type="radio"
                    id="male"
                    name="gender"
                    checked={gender === "male"}
                    onClick={() => {
                      setGender("male");
                    }}
                  />
                  <label htmlFor='male' className="input-heading">male</label>


                  <input type="radio"
                    id="femlae"
                    name="gender"
                    checked={gender === "female"}
                    onClick={() => {
                      setGender("female");
                    }}
                  />
                  <label htmlFor='female' className="input-heading">female</label>
                </div>

                <div>
                  <label htmlFor="image" className="input-heading">Image</label>
                  <input type="text"
                    id="image"
                    className="from-control"
                    value={image}
                    onChange={(e) => {
                      setimage(e.target.value);
                    }} />


                  <button type="button"
                    className=" singup-btn"
                    onClick={signupUser}>
                    SignUp
                  </button>

                </div>



              </div>
            </div>

          </div>
          </div>
          </div> */}



    </>
  )

}


export default Signup;