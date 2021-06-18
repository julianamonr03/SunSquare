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
import MyAnnouncement from './My-announcements';


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
        },
        {
            img1: "https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50JTIwaW50ZXJpb3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            img2: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            img3: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwaW50ZXJpb3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ]

    const aspirants = [
        {
            firstName: "Juliana",
            lastName: "Monroy",
            email: "juliana@gmail.com",
            age: "23",
            typeOfWork: "Software Ingenier",
            incomes: "7'000.000",
            phoneNumber: "3125647389",
            references: ""
        },
        {
            firstName: "Martin",
            lastName: "Corredor",
            email: "dev.martincorredor@gmail.com",
            age: "25",
            typeOfWork: "Civil Ingenier",
            incomes: "6'000.000",
            phoneNumber: "3224682353",
            references: ""
        },
        {
            firstName: "Nelson",
            lastName: "Arevalo"
        },
        {
            firstName: "Oscar",
            lastName: "Torres"
        },
        {
            firstName:"Teresa",
            lastName:"Amaya"
        },
        {
            firstName:"Luis",
            lastName:"Perez"
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
                        <NavLink to="/" activeStyle>
                            <span>
                                <img src={LOGO} alt="" id="bar" />
                            </span>
                        </NavLink>
                        <NavLink to="/" activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/my-announcements" activeStyle>
                            My announcements
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
                    <div className="">
                        <div className="my-announ-title">My announcements</div>
                        <div className="my-announs-section">
                            <MyAnnouncement 
                                img={ads[3].img1} 
                                description={ads[0].description}
                                firstName={aspirants[0].name}
                                lastName={aspirants[0].lastName}
                                email={aspirants[0].email}
                                age={aspirants[0].age}
                                typeOfWork={aspirants[0].typeOfWork}
                                incomes={aspirants[0].incomes}
                                phoneNumber={aspirants[0].phoneNumber}
                                firstName3={aspirants[3].name}
                                lastName3={aspirants[3].lastName}
                            />
                            <MyAnnouncement 
                                img={ads[3].img2}
                                description={ads[1].description}
                                firstName={aspirants[1].name}
                                lastName={aspirants[1].lastName}
                                email={aspirants[1].email}
                                age={aspirants[1].age}
                                typeOfWork={aspirants[1].typeOfWork}
                                incomes={aspirants[1].incomes}
                                phoneNumber={aspirants[1].phoneNumber}
                                firstName4={aspirants[4].name}
                                lastName4={aspirants[4].lastName}
                            />
                            <MyAnnouncement 
                                img={ads[3].img3}
                                description={ads[2].description}
                                firstName2={aspirants[2].name}
                                lastName2={aspirants[2].lastName}
                                firstName={aspirants[5].name}
                                lastName={aspirants[5].lastName}
                            />
                        </div>
                    </div>
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