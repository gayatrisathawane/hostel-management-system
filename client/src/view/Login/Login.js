import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Login.css"
import Footer from '../../component/Footer/Footer'
import Navbar from "../../component/Navbar/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
      const response = await axios.post("api/login", {
          email: email,
          password: password
      }); 

      alert(response?.data?.message);

      if(response?.data?.success) {
          localStorage.setItem("user", JSON.stringify(response?.data?.data));
          window.location.href = "/"
      }
  }
  useEffect(() => {
      const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

      if (storageUser?.email) {
          alert("You are alredy looged in!");
          window.location.href = "/";
      }

  }, [])
  return (

      <div>
          <Navbar />

          <div className="main-containerB">
            <div className="background-imageA">
            </div>

            <div>
            <from className="login-from">
              <p className=" fs-1">Login</p>

              <div>
                  <div className="mt-1">
                      <label htmlFor="email" className="input-heading-login fs-5 mt-1">Email</label>
                      <input type="email"
                          placeholder="Enter your email"
                          id="email"
                          className="from-control p-2"
                          value={email}
                          onChange={(e) => {
                              setEmail(e.target.value);
                          }} />
                  </div>

                  <div className="mt-1">
                      <label htmlFor="password" className="input-heading-login fs-5 mt-1">Password</label>
                      <input type="password"
                          placeholder="Enter your password "
                          id="password"
                          className="from-control p-2"
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value);
                          }} />
                  </div>
              </div>

              <button type="button" className="login-btn"
                  onClick={Login} >
                  Login
              </button>

          </from>
            </div>
           

          </div>

          <Footer/>
            
         
      </div>

  );
};

export default Login;