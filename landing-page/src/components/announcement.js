import React from 'react';

const Announcement = ()=> {
    return (
        <div className="Announcement">
            <div className="Announcement-title">
                Arriendo
            </div>
            <div className="Announcement-card">
                <div className="Announcement-card-image">
                    <img className="Img-min" src="https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Apto1"></img>
                </div>
                <div className="Announcement-card-text">
                    <div className="Announcement-card-text-min">
                        <div>Bogotá  Chapinero</div>
                        <div className="Border-left-color">Canon 1000000</div>
                    </div>
                        <div className="Announcement-card-text-min">
                        <div>2 Habitaciones</div>
                        <div className="Border-left-color">2 Baños</div>
                        <div className="Border-left-color">1 Garaje</div>
                    </div>
                    <div className="Announcement-card-text-min">
                        <div>Salacomedor</div>
                        <div className="Border-left-color">Cocina Integral</div>
                    </div>
                    <div className="Announcement-card-text-min Announcement-description-card">
                        Descripción...
                    </div>
                    <div className="Announcement-card-text-min">
                        <button type="button" class="btn btn-primary Margin-left">Aplicar</button>
                    </div>
                    
                </div>
            </div>   
        </div>
    )
}

export default Announcement;