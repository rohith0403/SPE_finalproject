import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
function Navbar() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <>
        <Nav>
          <NavLink to = "/">Writer's Site</NavLink>
      {loggedIn === false && (
        <>
        <NavLink to='/Register' activeStyle>Sign Up</NavLink>
          {/* <Link to="/register">Register</Link> */}
        {/* <NavLink to='/Login' activeStyle>Sign In</NavLink> */}
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
                  {/* <Link to="/login">Log in</Link> */}
        </>
      )}
      {loggedIn === true && (
        <>
        <NavLink to='/customer' activeStyle>Customers</NavLink>
        <NavBtn>
          <LogOutBtn />
        </NavBtn>

        </>
      )}
      </Nav>
        </>
    )
}

export default Navbar
