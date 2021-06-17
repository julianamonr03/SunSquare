import React, { useState } from "react";

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
    <form onSubmit={(ev) => sendForm(ev)}>
      <fieldset>
        <div class="form-group">
          <label htmlFor="city" class="form-label mt-4">
            City: {city}
          </label>
          <input
            type="text"
            id="city"
            class="form-control"
            placeholder="Enter City"
            onChange={(ev) => setCity(ev.target.value)}
          />
        </div>

        <div class="form-group">
          <label htmlFor="neighborhood" class="form-label mt-4">
            Neighborhood:
          </label>
          <input
            type="text"
            id="neighborhood"
            class="form-control"
            placeholder="Enter neighborhood"
            onChange={(ev) => setNeighborhood(ev.target.value)}
          />
        </div>

        <div>
          <label htmlFor="n-rooms" class="form-label mt-4">
            Number Rooms: {rooms}
          </label>
          <select
            class="form-select"
            id="n-rooms"
            onChange={(ev) => setRooms(ev.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>+9</option>
          </select>
        </div>

        <div>
          <label htmlFor="n-bathrooms" class="form-label mt-4">
            Number Bathrooms:
          </label>
          <select
            class="form-select"
            id="n-bathrooms"
            onChange={(ev) => setBathrooms(ev.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>+9</option>
          </select>
        </div>

        <fieldset>
          <div class="form-label form-check form-switch mt-4">
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Parking Lot {carpark}
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={(ev) => setCarpark(ev.target.value)}
            />
          </div>
        </fieldset>

        <div class="form-group">
          <label class="form-label mt-4">Footage</label>
          <div class="form-group">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                aria-label="size of the property (square meters)"
                onChange={(ev) => setFootage(ev.target.value)}
              />
              <span class="input-group-text">
                M<sup>2</sup>
              </span>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label mt-4">Building Fees</label>
          <div class="form-group">
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
                onChange={(ev) => setFees(ev.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <input type="button" class="btn btn-primary" value="Send" />
        </div>
      </fieldset>
    </form>
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

export default Form;
