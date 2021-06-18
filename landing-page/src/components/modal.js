import React from 'react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const MyModal = ()=> {
    const [datos, setDatos] = useState({
        type: "",
        price: "",
        city: "",
        neighborhood: "",
        rooms: "",
        bathrooms: "",
        carpark: "",
        buildingfees: "",
        contact: "",
        description: ""
    })

    const handleInputChance = (event)=> {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    
    const sendData = (event)=> {
        event.preventDefault();
        console.log(datos);
    }

    return (
        <div className="modal-form">
            <Fragment>
                <form>
                    <div className="form-group form-item">
                        <label for="exampleFormControlSelect1">Type</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="type"
                            onChange={handleInputChance}
                        >
                        <option>On rent</option>
                        <option>On sale</option>
                        </select>
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">Price</label>
                        <input 
                            type="number"
                            className="form-control b-color"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="price"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">City</label>
                        <input 
                            type="text"
                            className="form-control b-trans"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="city"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">Neighborhood</label>
                        <input
                            type="text"
                            className="form-control b-trans"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="neighborhood"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlSelect1">Number of Rooms</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="rooms"
                            onChange={handleInputChance}
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4 or more</option>
                        </select>
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlSelect1">Number of Bathrooms</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="bathrooms"
                            onChange={handleInputChance}
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4 or more</option>
                        </select>
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlSelect1">Carpark</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="carpark"
                            onChange={handleInputChance}
                        >
                        <option>It doesn't have</option>
                        <option>1</option>
                        <option>2 or more</option>
                        </select>
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlSelect1">Buildingfees (m2)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="buildingfees"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">Contact Number</label>
                        <input
                            type="number"
                            className="form-control b-trans"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="contact"
                            onChange={handleInputChance}
                        />
                    </div>
                    
                </form>
            </Fragment>
            
        </div>
    )
}

export default MyModal