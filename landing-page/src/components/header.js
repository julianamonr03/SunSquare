import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Welcome from './Welcome';
import Announcement from './announcement';
import UserForm from './login-up';
import CreateAd from './CreateAd';
import SignIn from './SignIn';

const Header = () => {
    return (
        <Router>
            <nav className="Header">
                <div>
                    <div className="NavBar">
                        <div className="NavBar-Items"><a href="Sunsquare" className="color-font"><span>SunSquare</span></a></div>
                        <Link to="/">
                            <div className="NavBar-Items"><a href="Home" className="color-font">Home</a></div>
                        </Link>
                        <Link to="/announcements">
                            <div className="NavBar-Items"><a href="Announcement" className="color-font">Announcements</a></div>
                        </Link>
                        <Link to="/create-ad">
                            <div className="NavBar-Items"><a href="CreateAd" className="color-font">Create your ad</a></div>
                        </Link> 
                    </div>
                </div>
                
                <div>
                    <div className="NavBar">
                        <Link to="/sign-in">
                            <div className="NavBar-Items"><a href="SignIn" className="color-font">Sign In</a></div>
                        </Link>
                        <Link to="/sign-up">
                            <div className="NavBar-Items"><a href="SignUp" className="color-font">Sign Up</a></div>
                        </Link>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path="/announcements">
                    <Announcement/>
                </Route>
                <Route path="/create-ad">
                    <CreateAd/>
                </Route>
                <Route path="/sign-in">
                    <SignIn/>
                </Route>
                <Route path="/sign-up">
                    <UserForm/>
                </Route>
                
                <Route path="/" exact>
                    <Welcome/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;