import React from 'react';
import CreateAd from './CreateAd';

const Announcement = ()=> {
    const info = {
        type: "On rent",
        price: "3'000.000",
        city: "Bogotá",
        neighborhood: "Chapinero",
        rooms: "3",
        bathrooms: "2",
        carpark: "1",
        buildingfees: "50",
        contact: "3225646",
        description: "Bonito apartamento, se entrega pintado"
    }

    return (
        <div className="announcement">
            <div className="announcement-title">
                <div>
                    {info.type}
                </div>
                <div>
                    Aspirant: 1
                </div>
            </div>
            <div className="announcement-card">
                <div id="carouselExampleInterval" className="carousel slide card-img" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="10000">
                            <img 
                                src="https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0ODEyOTQzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                className="d-block img-min" 
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item" data-interval="2000">
                            <img 
                                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NDgxMjk0M3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                class="d-block w-100 img-min" 
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item ">
                            <img 
                                src="https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4NTc4MzEyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                class="d-block w-100 img-min" 
                                alt="..."
                            />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                
                <div className="card-text">
                    <div className="cart-text-line">
                        <div className="card-text-item">
                            {info.city}
                        </div>
                        <div className="card-text-item">
                            {info.neighborhood}
                        </div>
                        <div className="card-text-item">
                            Price: {info.price}
                        </div>
                    </div>
                    <div className="cart-text-line">
                        <div className="card-text-item">
                            Rooms: {info.rooms}
                        </div>
                        <div className="card-text-item">
                            Bathrooms: {info.bathrooms}
                        </div>
                        <div className="card-text-item">
                            Carpark: {info.carpark}
                        </div>
                    </div>
                    <div className="cart-text-line">
                        <div className="card-text-item">
                            Buildingfees: {info.buildingfees}
                        </div>
                        <div className="card-text-item">
                            Integral kitchen
                        </div>
                        <div className="card-text-item">
                            Courtyard of clothes
                        </div>
                    </div>
                    <div className="card-description">
                        <div>
                            Description
                        </div>
                        <div className="card-t">
                            {info.description}
                        </div>
                    </div>
                    <button className="btn btn-primary card-button">
                            Aplicate
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Announcement;