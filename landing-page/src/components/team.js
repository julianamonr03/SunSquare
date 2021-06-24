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
                    <div className="icons-box">
                        <a href="https://github.com/julianamonr03">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/733/733553.png">  
                            </img>
                        </a>
                        <a href="https://www.linkedin.com/in/juliana-monroy-perez">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/174/174857.png">  
                            </img>
                        </a>
                        <a href="https://twitter.com/julianamonroy03">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/174/174876.png">  
                            </img>
                        </a>
                    </div>
                </div>
                
                <div className="team-person">
                    <img className="team-img" src={fotoNelson}/>
                    <div className="bold">Nelson Arevalo</div>
                    <div className="bold">Back-end Developer</div>
                    <div className="icons-box">
                        <a href="https://github.com/NelsonarevaloF">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/733/733553.png">  
                            </img>
                        </a>
                        <a href="https://www.linkedin.com/in/near-fuentes/">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/174/174857.png">  
                            </img>
                        </a>
                        <a href="https://twitter.com/Near_Fuentes">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/174/174876.png">  
                            </img>
                        </a>
                    </div>
                </div>
                <div className="team-person">
                    <img className="team-img" src={fotoMartin}/>
                    <div className="bold">Martin Corredor</div>
                    <div className="bold">Front-end Developer</div>
                    <div className="icons-box">
                        <a href="https://github.com/martincorredor">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/733/733553.png">  
                            </img>
                        </a>
                        <a href="https://www.linkedin.com/in/martin-corredor/">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/174/174857.png">  
                            </img>
                        </a>
                        <a href="https://www.linkedin.com/in/martin-corredor/">
                            <img 
                                className="icon"
                                src="https://image.flaticon.com/icons/png/512/174/174876.png">  
                            </img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team