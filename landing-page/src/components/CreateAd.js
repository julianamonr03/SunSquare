import React, {Fragment, useState} from 'react';


const CreateAd = ()=> {
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
/*
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e)=> {
        console.log(data)
        e.target.reset()
    }
*/
    const handleInputChance = (event)=> {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    
    const sendData = (event)=> {
        event.preventDefault();
        console.log(datos);
        /*fetch("http://35.231.58.85/users", {
            method: "POST",
            body: JSON.stringify({
                datos
      }),
      headers: {
        "Content-type": "application/json; charset: UTF-8"
      }
    });*/
    }


    return(
        <div className="Container Form margin-top">
            <Fragment>
                <h1>Your advertisement</h1>
                <hr></hr>
                <form onSubmit={sendData}>
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
                    <div className="form-group form-item">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="description"
                            onChange={handleInputChance}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary Margin-left">
                            Create
                        </button>
                    </div>
                </form>
            </Fragment>
            
        </div>  
    )
}

export default CreateAd