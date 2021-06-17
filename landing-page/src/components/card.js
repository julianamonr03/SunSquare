import React, { useState } from "react";
import image1 from "../img/image1.jpg";
import Form from "./form";
import Modal from "react-bootstrap/Modal";


function Card({ title, imagesource }) {
  let [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit Announcement
          </Modal.Title>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
      </Modal>

      <div className="card" id="card-border">
        <img src={imagesource} alt="" />
        <div className="card-body">
          <h4 className="card-title">
            {title}
            {show}
          </h4>
          <div className="container d-flex justify-content-around w-75">
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => setShow(true)}
            >
              Edit
            </button>
            <a href="#!" className="btn btn-outline-danger">
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
