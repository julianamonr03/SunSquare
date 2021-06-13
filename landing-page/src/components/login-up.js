import React, {Fragment, useState} from 'react';
//import {useForm} from 'react-hook-form';

const UserForm = ()=> {
    const [datos, setDatos] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        typeOfWork: "",
        incomes: "",
        phoneNumber: "",
        references: ""
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
        console.log({datos})
        fetch("http://35.231.58.85/users", {
            method: "POST",
            body: JSON.stringify({
                datos
      }),
      headers: {
        "Content-type": "application/json; charset: UTF-8"
      }
    });
    }

    return(
        <div className="Container Form margin-top">
            <Fragment>
                <h1>Sign up</h1>
                <hr></hr>
                <form onSubmit={sendData}>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">First Name</label>
                        <input
                            type="text"
                            className="form-control b-color"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="firstName"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">Last Name</label>
                        <input
                            type="text"
                            className="form-control b-trans"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="lastName"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input 
                            type="email"
                            className="form-control b-trans"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            name="email"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlSelect1">Age</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="age"
                            onChange={handleInputChance}
                        >
                        <option>18-20</option>
                        <option>20-30</option>
                        <option>30-40</option>
                        <option>40-50</option>
                        <option>Mayor de 50 años</option>
                        </select>
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">Type of work</label>
                        <input
                            type="text"
                            className="form-control b-trans"
                            id="exampleFormControlInput1"
                            placeholder="example: Software Developer"
                            name="typeOfWork"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">Incomes (COP)</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="incomes"
                            onChange={handleInputChance}
                        >
                        <option>0 - 1'000.000</option>
                        <option>1'000'001 - 2'000.000</option>
                        <option>2'000.001 - 3'000.000</option>
                        <option>3'000.001 - 4'000.000</option>
                        <option>More of 4'000.000</option>
                        </select>
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlInput1">Phone Number</label>
                        <input
                            type="number"
                            className="form-control b-trans" 
                            id="exampleFormControlInput1" 
                            placeholder=""
                            name="phoneNumber"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div className="form-group form-item">
                        <label for="exampleFormControlTextarea1">References</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="references"
                            onChange={handleInputChance}
                        >

                        </textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary ">
                            Send
                        </button>
                    </div>
                </form>
            </Fragment>
        </div>  
    )
}

export default UserForm