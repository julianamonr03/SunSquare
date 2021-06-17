import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './nav';
import Welcome from './Welcome';
import Announcement from './announcement';
import UserForm from './login-up';
import CreateAd from './CreateAd';
import SignIn from './SignIn';
import UserLog from './User-log';
import LOGO from '../img/LOGO.png';
import Cards from './cards';


const Header = () => {

    const ads = [
        {   
            type: "On Rent",
            price: "3'000.000",
            city: "Bogotá",
            neighborhood: "Chapinero",
            rooms: "3",
            bathrooms: "2",
            carpark: "1",
            buildingfees: "50",
            contact: "3224682353",
            description: "Nice Apartment in a exclusive zone, with a great view.",
            img: "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0ODEyOTQzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {  
            type: "On Rent",
            price: "1'200.000",
            city: "Bogotá",
            neighborhood: "Chapinero Alto",
            rooms: "1",
            bathrooms: "1",
            carpark: "1",
            buildingfees: "30",
            contact: "3109807891",
            description: "Apartment in optimal conditions",
            img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NDgxMjk0M3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {  
            type: "On Rent",
            price: "2'300.000",
            city: "Bogotá",
            neighborhood: "Chapinero",
            rooms: "2",
            bathrooms: "1",
            carpark: "1",
            buildingfees: "60",
            contact: "3225646243",
            description: "No description",
            img: "https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4NTc4MzEyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]
    return (
        <Router>
            <>
                <Nav className="NavBar">
                    <NavLink to="/">
                        <img src="" alt=""/>
                    </NavLink>
                    <Bars />
                    <NavMenu>
                        <NavLink to="/Sunsquare" activeStyle>
                            <span>
                                <img src={LOGO} alt="" id="bar" />
                            </span>
                        </NavLink>
                        <NavLink to="/" activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/my-announcements" activeStyle>
                            My Announcements
                        </NavLink>
                        <NavLink to="/create-ad" activeStyle>
                            Create your Advertisement
                        </NavLink>
                        <NavLink to="/sign-in" activeStyle>
                            Sign In
                        </NavLink>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="sign-up">Sign Up</NavBtnLink>
                    </NavBtn>
                </Nav>
            </>
            <Switch>
                <Route path="/announcements">
                    <div className="top">
                    <Announcement 
                        type={ads[0].type} 
                        price={ads[0].price} 
                        city={ads[0].city} 
                        neighborhood={ads[0].neighborhood} 
                        rooms={ads[0].rooms} 
                        bathrooms={ads[0].bathrooms} 
                        carpark={ads[0].carpark}
                        buildingfees={ads[0].buildingfees}
                        contact={ads[0].contact}
                        description={ads[0].description}
                        img={ads[0].img}
                    />
                    <Announcement
                        type={ads[1].type} 
                        price={ads[1].price} 
                        city={ads[1].city} 
                        neighborhood={ads[1].neighborhood} 
                        rooms={ads[1].rooms} 
                        bathrooms={ads[1].bathrooms} 
                        carpark={ads[1].carpark}
                        buildingfees={ads[1].buildingfees}
                        contact={ads[1].contact}
                        description={ads[1].description}
                        img={ads[1].img}
                    />
                    <Announcement
                        type={ads[2].type} 
                        price={ads[2].price} 
                        city={ads[2].city} 
                        neighborhood={ads[2].neighborhood} 
                        rooms={ads[2].rooms} 
                        bathrooms={ads[2].bathrooms} 
                        carpark={ads[2].carpark}
                        buildingfees={ads[2].buildingfees}
                        contact={ads[2].contact}
                        description={ads[2].description}
                        img={ads[2].img}
                    />
                    </div>
                </Route>
                <Route path="/my-announcements">
                    <Cards/>
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