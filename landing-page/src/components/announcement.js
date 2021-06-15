import React, { useState, useEffect } from 'react';


const Announcement = (data)=> {
    const info = {
        type: "On Rent",
        price: "3'000.000",
        city: "Bogotá",
        neighborhood: "Chapinero",
        rooms: "3",
        bathrooms: "2",
        carpark: "1",
        buildingfees: "50",
        contact: "3225646",
        description: "Nice Apartment in a exclusive zone, with a great view."
    }

    const [count, setCount] = useState(0);
    
    const [active, setActive] = useState(true);

    return (
        <div className="announcement">
            <div className="announcement-title">
                <div>
                    {info.type}
                </div>
                <div>
                    Aspirants: {count}
                </div>
            </div>
            <div className="announcement-card">
                <div id="carouselExampleInterval" className="carousel slide card-img" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item " data-interval="10000">
                            <img 
                                src="https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0ODEyOTQzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                className="d-block img-min" 
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item active" data-interval="2000">
                            <img 
                                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NDgxMjk0M3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                className="d-block w-100 img-min" 
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item ">
                            <img 
                                src="https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4NTc4MzEyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                className="d-block w-100 img-min" 
                                alt="..."
                            />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                
                <div className="card-text">
                    <div className="cart-text-line">
                        <div className="card-text-item bold">
                            {info.city}
                        </div>
                        <div className="card-text-item bold">
                            {info.neighborhood}
                        </div>
                        <div className="card-text-item">
                            <div className="bold p-r">Price:</div>
                            {info.price}
                        </div>
                    </div>
                    <div className="cart-text-line">
                        <div className="card-text-item">
                            <div className="bold p-r">Room:</div>
                             {info.rooms}
                        </div>
                        <div className="card-text-item ">
                            <div className="bold p-r">Bathroom:</div> 
                            {info.bathrooms}
                        </div>
                        <div className="card-text-item">
                            <div className="bold p-r">Carpark: </div>
                            {info.carpark}
                        </div>
                    </div>
                    <div className="cart-text-line">
                        <div className="card-text-item">
                            <div className="bold p-r">Buildingfee: </div>
                            {info.buildingfees}
                        </div>
                        <div className="card-text-item bold">
                            Integral kitchen
                        </div>
                        <div className="card-text-item bold">
                            Courtyard of clothes
                        </div>
                    </div>
                    <div className="card-description">
                        <div className="bold">
                            Description
                        </div>
                        <div className="card-t">
                            {info.description}
                        </div>
                    </div>
                    <button className="btn btn-primary card-button" onClick={()=> setCount(count + 1)}>
                            Apply
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Announcement;