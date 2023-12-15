import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Login.css"
import Footer from '../../component/Footer/Footer'
import Navbar from "../../component/Navbar/Navbar";
import loginbg from './login.png'
import { Link } from "react-router-dom";


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

            <div className="login-container">
                <div className="login-bg-container">

                    <img src={loginbg} alt="loginbg" className="loginbg" />

                </div>

                <div className="login-details">
                    <h1 className="blue-color mt-5"> WELCOME !</h1>
                    <div>

                        <div className="p-2">
                            <label htmlFor="email" className="input-heading-login mt-1">Email</label><br />
                            <input type="email"
                                placeholder="Enter your email"
                                id="email"
                                className="input-field-login mt-1"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </div>

                        <div className="p-2">
                            <label htmlFor="password" className="input-heading-login mt-1">Password</label><br />
                            <input type="password"
                                placeholder="Enter your password"
                                id="password"
                                className="input-field-login mt-1"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                        </div>


                        <button type="button" className="login-btn ms-2"
                            onClick={Login} >
                            Login
                        </button>

                        <Link className="text-decoration-none " to='/signup'><p className="text-center">New Member ? Sign up Now</p></Link>



                    </div>
                </div>






            </div>
















            <div className="main-containerB">
                <div className="background-imageA">
                </div>

                <div>
                    <from className="login-from">

                        <div>

                        </div>



                    </from>
                </div>
            </div>
            <Footer />
        </div>

    );


};

export default Login;