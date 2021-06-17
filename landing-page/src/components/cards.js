import React from "react";
import Card from "./card";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";

const jsontest = [
  {
    id: 76554221,
    description: "hermosa casa con vista al lago",
    datepost: "12/06/2021",
    campospropiedades: "some.propertys",
    image: image1
  },
  {
    id: 51246451,
    description: "hermosa casa con vista a fontibon",
    datepost: "12/06/2021",
    campospropiedades: "some.propertys",
    image: image2
  },
  {
    id: 17634312,
    description: "hermosa casa con vista al monserrate",
    datepost: "12/06/2021",
    campospropiedades: "some.propertys",
    image: image3
  }
];

function Cards() {
  return (
    <div className="margin-top">
      <h2 className="">My announcement</h2>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {jsontest.map((card) => (
            <div className="col-md-4">
              <Card title={"Id Announcement: " + card.id} imagesource={card.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;