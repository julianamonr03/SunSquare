import React, { useState, useEffect } from 'react';


const Announcement = (props)=> {
    const ads = [
        {   type: "On Rent",
            price: "3'000.000",
            city: "Bogotá",
            neighborhood: "Chapinero",
            rooms: "3",
            bathrooms: "2",
            carpark: "1",
            buildingfees: "50",
            contact: "3225646",
            description: "Nice Apartment in a exclusive zone, with a great view."
        },
        {   type: "On Rent",
            price: "2'000.000",
            city: "Bogotá",
            neighborhood: "Chapinero Alto",
            rooms: "1",
            bathrooms: "1",
            carpark: "1",
            buildingfees: "30",
            contact: "322564624",
            description: "Nice Apartment in a exclusive zone, with a great view."
        }
    ]

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
                        <div className="carousel-item active" data-interval="10000">
                            <img 
                                src={props.img}
                                className="d-block img-min" 
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item " data-interval="2000">
                            <img 
                                src={props.img} 
                                className="d-block w-100 img-min" 
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item ">
                            <img 
                                src={props.img}
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
                            {props.city}
                        </div>
                        <div className="card-text-item bold">
                            {props.neighborhood}
                        </div>
                        <div className="card-text-item">
                            <div className="bold p-r">Price:</div>
                            {props.price}
                        </div>
                    </div>
                    <div className="cart-text-line">
                        <div className="card-text-item">
                            <div className="bold p-r">Room:</div>
                             {props.rooms}
                        </div>
                        <div className="card-text-item ">
                            <div className="bold p-r">Bathroom:</div> 
                            {props.bathrooms}
                        </div>
                        <div className="card-text-item">
                            <div className="bold p-r">Carpark: </div>
                            {props.carpark}
                        </div>
                    </div>
                    <div className="cart-text-line">
                        <div className="card-text-item">
                            <div className="bold p-r">Buildingfee: </div>
                            {props.buildingfees}
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
                            {props.description}
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