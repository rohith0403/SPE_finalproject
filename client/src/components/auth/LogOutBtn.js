import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom"; 
import AuthContext from "../../context/AuthContext";
// import {
//   NavBtn
// } from '../layout/NavbarElements';
function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    // await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/auth/logout"
    // );
    // await getLoggedIn();
    history.push("/");
  }

  return (
    <btn onClick={logOut}>Log out</btn>
    // <NavBtn onClick={logOut}>Log out</NavBtn>;
  );

}

export default LogOutBtn;
