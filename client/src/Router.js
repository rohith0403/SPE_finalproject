import React, { useContext } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/pages/Dashboard';
// import MyEditor from './components/pages/MyEditor';
import AuthContext from "./context/AuthContext";
import PersistentEditor from "./components/pages/PersistentEditor";
import ReadonlyEditor from "./components/pages/ReadonlyEditor"

function Router() {
    const { loggedIn } = useContext(AuthContext);
    return <BrowserRouter>
        <Switch>
            <Route exact path = "/" render={()=> <Redirect to ="/login" />}></Route>
            {loggedIn === false && (
                <>
            {/* <Navbar /> */}
            <Route path="/register"component = {Register}></Route>
            <Route path="/login" component = {Login}></Route>
          </>
        )}
        <div>
        <Sidebar />
        {loggedIn === true && (
            <>
            <Route path="/dashboard"component = {Dashboard}></Route>
            <Route path="/editor" component = {PersistentEditor}></Route>
            <Route path="/reading" component = {ReadonlyEditor}></Route>
            </>
        )}
        </div>
        </Switch>
    </BrowserRouter>
}

export default Router;
