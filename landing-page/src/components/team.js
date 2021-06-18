import React from 'react';
import fotoJuli from '../img/photos/fotoJuli.jpg'
import fotoNelson from '../img/photos/fotoNelson.jpg'
import fotoMartin from '../img/photos/fotoMartin.jpg'


const Team = ()=> {
    return (
        <div className="team-section">
            <div className="team-teatle bold">
                Meet our Developers!
            </div>
            <div className="team">
                
                <div className="team-person">
                    <img className="team-img" src={fotoJuli}/>
                    <div className="bold">Juliana Monroy</div>
                    <div className="bold">Back-end Developer</div>
                    <a className="team-linkedin" href="https://www.linkedin.com/in/juliana-monroy-perez">Linkedin</a>
                </div>
                
                <div className="team-person">
                    <img className="team-img" src={fotoNelson}/>
                    <div className="bold">Nelson Arevalo</div>
                    <div className="bold">Back-end Developer</div>
                    <a className="team-linkedin" href="https://www.linkedin.com/in/near-fuentes/">Linkedin</a>
                </div>
                <div className="team-person">
                    <img className="team-img" src={fotoMartin}/>
                    <div className="bold">Martin Corredor</div>
                    <div className="bold">Front-end Developer</div>
                    <a className="team-linkedin" href="https://www.linkedin.com/in/martin-corredor/">Linkedin</a>

                </div>
            </div>
        </div>
    )
}

export default Team