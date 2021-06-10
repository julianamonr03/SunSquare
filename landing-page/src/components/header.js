import React from 'react';

const Header = () => {
    return (
        <nav className="Header">
            <ul className="NavBar">
                <li className="NavBar-Items"><a href="#" class="Color-white"><span>SunSquare</span></a></li>
                <li className="NavBar-Items"><a href="#Home" class="Color-white">Home</a></li>
                <li className="NavBar-Items"><a href="Announcement" class="Color-white">My announcements</a></li>
                <li className="NavBar-Items"><a href="CreateAd" class="Color-white">Create your ad</a></li>
            </ul>
            <div>
                <a class="Color-white">Sign</a>
            </div>
        </nav>
    )
}

export default Header;