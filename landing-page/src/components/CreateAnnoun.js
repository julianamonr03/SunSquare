import React, { useState, Fragment } from "react";
import { render } from "react-dom";

//ejercicio de formulario
const Form = () => {
  let [city, setCity] = useState("");
  let [neighborhood, setNeighborhood] = useState("");
  let [rooms, setRooms] = useState("");
  let [bathrooms, setBathrooms] = useState("");
  let [carpark, setCarpark] = useState("");
  let [footage, setFootage] = useState("");
  let [fees, setFees] = useState("");

  const sendForm = (ev) => {
    ev.preventDefault();
    fetch("http://35.231.58.85/users", {
      method: "POST",
      body: JSON.stringify({
        city: city,
        neighborhood: neighborhood,
        rooms: rooms,
        bathrooms: bathrooms,
        carpark: carpark,
        footage: footage,
        fees: fees
      }),
      headers: {
        "Content-type": "application/json; charset: UTF-8"
      }
    });
  };

  return (
    <Fragment> 
      <form className="Container mt-5 Form" onSubmit={(ev) => sendForm(ev)}>
        <h1>Your Announcement</h1>
        <hr></hr>
        <div class="form-group form-item">
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            class="form-control b-color"
            onChange={(ev) => setCity(ev.target.value)}
          />
        </div>
        <div class="form-group form-item">
          <label htmlFor="neighborhood">Neighborhood: </label>
          <input
            type="text"
            id="neighborhood"
            class="form-control b-color"
            onChange={(ev) => setNeighborhood(ev.target.value)}
          />
        </div>
        <div class="form-group form-item">
          <label htmlFor="n-rooms">Number of rooms: </label>
          <input
            type="text"
            id="n-rooms"
            class="form-control b-color"
            onChange={(ev) => setRooms(ev.target.value)}
          />
        </div>
        <div class="form-group form-item">
          <label htmlFor="n-bathrooms">Number of bathrooms: </label>
          <input
            type="text"
            id="n-bathrooms"
            class="form-control b-color"
            onChange={(ev) => setBathrooms(ev.target.value)}
          />
        </div>
        <div class="form-group form-item">
          <label htmlFor="car-park">Car park: </label>
          <input
            type="text"
            id="car-park"
            class="form-control b-color"
            onChange={(ev) => setCarpark(ev.target.value)}
          />
        </div>
        <div class="form-group form-item">
          <label htmlFor="footage">Footage: </label>
          <input
            type="text"
            id="footage"
            class="form-control b-color"
            onChange={(ev) => setFootage(ev.target.value)}
          />
        </div>
        <div class="form-group form-item">
          <label htmlFor="b-fees">Building fees: </label>
          <input
            type="text"
            id="b-fees"
            class="form-control b-color"
            onChange={(ev) => setFees(ev.target.value)}
          />
        </div>
        <input class="btn btn-primary Margin-left" type="submit" value="Send" />
      </form>
    </Fragment>
  );
};

//ejercicio de states (diferentes estados de un elemento)
const Button = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>presionado: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click here!!</button>
      <button onClick={() => setCounter(0)}>restart!!</button>
    </div>
  );
};



export default Form