import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input }
    from "reactstrap";

import "./Login.css";
// import "./registerFormStyle.css";
import AuthContext from "../../context/AuthContext";
import {Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; 

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function register (e){
        e.preventDefault();
        
        try {
            const registerData = {
                username,
                password
            };

            await axios.post("http://localhost:5000/auth/", registerData);
            getLoggedIn();
        } catch (err) {
            console.error(err);
        }
        history.push("/dashboard");

    }
    return (
        <div className = "body">
        <Form className = "register-form" onSubmit={register}>
            <h1 className = "text-center" style =  {{color : 'darksmoke'}}> Writer's site</h1>
            <h3 className = "text-center" style =  {{color : 'darksmoke'}}> Please register</h3>
            <FormGroup>
            <label>username</label>
            <Input 
            type = "username" 
            placeholder = "username" 
            onChange = {(e) => setUsername(e.target.value)}
            value={username}
            >
            </Input>
            <label>password</label>
            <Input type = "password" 
            placeholder = "password"
            onChange = {(e) => setPassword(e.target.value)}
            value={password}
            ></Input>

            </FormGroup>
            <Button>Register</Button>
            <div className = "text-center pt-3">If you already have an account, please login</div>
            <Link to="/login">
            <Button>Log in</Button>
            </Link>
        </Form>
    </div>
    // <div className="base-container">
    // <div className="header">Register</div>
    // <div className="content">
    // {/* <div className="image"> 
    //     <img src={loginImg} />
    // </div> */}
    //     <div className="form" onSubmit={register}>
    //         <div className="form-group">
    //         <label htmlFor="username">Username</label>
    //         <input 
    //         type="text" 
    //         name="username" 
    //         placeholder="username"
    //         onChange = {(e) => setUsername(e.target.value)}
    //         value={username}
    //         />
    //         </div>
    //         <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <input 
    //         type="password" 
    //         name="password" 
    //         placeholder="password" 
    //         onChange = {(e) => setPassword(e.target.value)}
    //         value={password}
    //         />
    //         </div>
    //     </div>
    //     </div>
    //     <div className="footer">
    //     <button type="button" className="btn" onClick={register}>
    //         Register
    //     </button>
    //     </div>
    // </div>
)
}

export default Register;
