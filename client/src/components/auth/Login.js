import React, { useContext, useState } from 'react';

// import { Button, Form, FormGroup, Input }
//     from "reactstrap";
import axios from 'axios';
import "./loginFormStyle.scss";
import AuthContext from "../../context/AuthContext";

function Login (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthContext);

    async function login (e){
        e.preventDefault();
        
        try {
            const loginData = {
                username,
                password
            };

            await axios.post("http://localhost:5000/auth/login", loginData);
            getLoggedIn();
        } catch (err) {
            console.error(err);
        }
    }

    return (
            // <div className = "body">
            // <Form className = "register-form" onSubmit={login}>
            //     <h1 className = "text-center" style =  {{color : 'darksmoke'}}> Writer's site</h1>
            //     <h3 className = "text-center" style =  {{color : 'darksmoke'}}> Please register</h3>
            //     <label>username</label>
            //     <Input 
            //     type = "username" 
            //     placeholder = "username" 
            //     onChange = {(e) => setUsername(e.target.value)}
            //     value={username}
            //     >
            //     </Input>
            //     <label>password</label>
            //     <Input type = "password" 
            //     placeholder = "password"
            //     onChange = {(e) => setPassword(e.target.value)}
            //     value={password}
            //     ></Input>
            //     <Button className = "btn-lg btn-dark btn-block btn-outline-info">Login</Button>
            //     <div className = "text-center pt-3"> If you do not have an account, sign up</div>
            //     <Button className = "btn-lg btn-block btn-danger mt-3 mb-3">Create an account</Button>
            // </Form>
        // </div>
            <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
            {/* <div className="image"> 
                <img src={loginImg} />
            </div> */}
            <div className="form" >
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                placeholder="username"
                onChange = {(e) => setUsername(e.target.value)}
                value={username}
                 />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                placeholder="password" 
                onChange = {(e) => setPassword(e.target.value)}
                value={password}
                />
                </div>
            </div>
            </div>
            <div className="footer">
            <button type="button" className="btn" onClick={login}>
                Login
            </button>
            </div>
        </div>
        );
}

export default Login;