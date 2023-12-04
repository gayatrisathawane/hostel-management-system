import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Login.css"
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

      if (response?.data?.success) {
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
          <from className="login-from">
              <h1 className="text-center">Login</h1>

              <div>
                  <div>
                      <label htmlFor="email" className="text-color">Email</label>
                      <input type="email"
                          placeholder="Enter your email"
                          id="email"
                          className="from-control"
                          value={email}
                          onChange={(e) => {
                              setEmail(e.target.value);
                          }} />
                  </div>

                  <div>
                      <label htmlFor="password" className="text-color">Password</label>
                      <input type="password"
                          placeholder="Enter your password"
                          id="password"
                          className="from-control"
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value);
                          }} />
                  </div>
              </div>

              <button type="button" className="btn login-btn"
                  onClick={Login} >
                  Login
              </button>

          </from>
      </div>

  );
};

export default Login;