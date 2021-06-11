import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Welcome from './Welcome';
import Announcement from './announcement';
import UserForm from './form';
import CreateAd from './CreateAd';

const Header = () => {
    return (
        <Router>
            <nav className="Header">
                <ul className="NavBar">
                    <li className="NavBar-Items"><a href="#" class="Color-white"><span>SunSquare</span></a></li>
                    <li className="NavBar-Items"><a href="#Home" class="Color-white">Home</a></li>
                    <li className="NavBar-Items"><a href="Announcement" class="Color-white">Announcements</a></li>
                    <li className="NavBar-Items"><a href="CreateAd" class="Color-white">Create your ad</a></li>
                </ul>
                <div>
                    <a class="Color-white">Sign In</a>
                </div>
            </nav>
            <Switch>
                <Route path="/announcements">
                    <Announcement/>
                </Route>
                <Route path="/user">
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