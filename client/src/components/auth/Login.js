import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
 setValue
} from "../../features/userSlice";
import axios from 'axios';
import "./Login.css";
import AuthContext from "../../context/AuthContext";
import {Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; 

export var userId;

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { getLoggedIn } = useContext(AuthContext);
    
    const history = useHistory();
    
    async function login(e) {
        e.preventDefault();

        try {
            const loginData = {
                username,
                password
            };
            
            await axios.post("http://localhost:5000/auth/login", loginData).then((resp)=>{
                console.log(resp.data);
                userId = resp.data;
                dispatch(setValue(userId));
                
            });
            getLoggedIn();
        } catch (err) {
            console.error(err);
        }
        history.push("/dashboard");
        
    }
    
    
    return (
        // <Form className="login-form" onSubmit={login}>
        //     <h1 className="text-center" style={{ color: 'darksmoke' }}>
        //         <span>Writer's site</span>
        //     </h1>
        //     <h2>Login</h2>
        //     <h3 className="text-center" style={{ color: 'darksmoke' }}> Login with your account</h3>
        //     <FormGroup>
        //         <label>username</label>
        //         <Input
        //             type="username"
        //             placeholder="username"
        //             onChange={(e) => setUsername(e.target.value)}
        //             value={username}>
        //         </Input>
        //     </FormGroup>
        //     <FormGroup>
        //         <label>password</label>
        //         <Input type="password"
        //             placeholder="password"
        //             onChange={(e) => setPassword(e.target.value)}
        //             value={password}
        //             ></Input>
        //     </FormGroup>
        //     <Button className="">Login</Button>
        //     <div className="text-center pt-3"> If you do not have an account, sign up</div>
        //     <Link to="/register">
        //     <Button className="" >Create an account</Button>
            // </Link>
        // </Form>
        <div className="login">
        <form className="login__form" onSubmit={login}>
          <h1>Login here 🚪</h1>
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit__btn">
            Submit
          </button>
        <div className="text-center pt-3"> If you do not have an account, sign up</div>
         <Link to="/register">
         <button type="submit" className="submit__btn">Create an account</button>
         </Link>

        </form>
      </div>
);
}
export default Login;