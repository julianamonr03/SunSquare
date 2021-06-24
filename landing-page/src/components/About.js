import React from 'react';
import Logo from '../img/LOGO.png';


const About = ()=> {
    return (
        <div className="About-section">
            <div className="team-teatle bold">
                About Us
            </div>
            <div className="About-text-section">
                <div className="About-text">
                    We care about the welfare of people who want to find a place to live 
                    and existing web pages have poor optimization of communication between a client and an owner.
                </div>
                <div className="About-text bold">The solution...</div>
                <img src={Logo} className="About-logo"></img>
                <div className="About-text">A Web application with System matching</div>
                <div className="About-tinder">
                    <img className="icon" src="https://image.flaticon.com/icons/png/512/1377/1377233.png"></img>
                    <div className="About-text bold">Real Estate Tinder</div>
                </div>
                <div className="About-text bold">HACKS!</div>
                <div className="hacks-section">
                    <div className="hack">
                        Optimize information between the client and a landlord.
                    </div>
                    <div className="hack">
                        No more time-wasting collecting numbers and information about announcements.
                    </div>
                    <div className="hack">
                        Accelerate the candidate selection process for the landlord.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;