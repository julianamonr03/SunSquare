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

const Header = () => {
    return (
        <Router>
            <nav className="Header">
                <div>
                    <ul className="NavBar">
                        <li className="NavBar-Items"><a href="#" class="Color-white"><span>SunSquare</span></a></li>
                        <Link to="/">
                            <li className="NavBar-Items"><a href="Home" class="Color-white">Home</a></li>
                        </Link>
                        <Link to="/announcements">
                            <li className="NavBar-Items"><a href="Announcement" class="Color-white">Announcements</a></li>
                        </Link>
                        <Link to="/create-ad">
                            <li className="NavBar-Items"><a href="CreateAd" class="Color-white">Create your ad</a></li>
                        </Link> 
                    </ul>
                </div>
                
                <div>
                    <ul className="NavBar">
                        <Link>
                            <li className="NavBar-Items"><a class="Color-white">Sign In</a></li>
                        </Link>
                        <Link to="/sign-up">
                            <li className="NavBar-Items"><a class="Color-white">Sign Up</a></li>
                        </Link>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/announcements">
                    <Announcement/>
                </Route>
                <Route path="/sign-up">
                    <UserForm/>
                </Route>
                <Route path="/create-ad">
                    <CreateAd/>
                </Route>
                <Route path="/" exact>
                    <Welcome/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;