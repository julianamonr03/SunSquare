import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import MyModal from './modal';
import { Fragment} from 'react';
import { Link } from 'react-router-dom';



const MyAnnouncement = (props)=> {
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


    const [open, setOpen] = useState(false)

    const openModal = ()=> {
        setOpen(true);
    }
    const closeModal = ()=> {
        setOpen(false);
    }
    return (
        <>
        <div className="My-announcement">
            <div>
                <img 
                    src={props.img}
                    className="img-my-announ" 
                    alt="..."
                />
            </div>
            <div className="my-announ-des">
                {props.description}
            </div>
            <div className="announ-buttons-section">
                <div className="edit-button" onClick={openModal}>EDIT</div>
                <div className="delete-button">DELETE</div>
            </div>
        </div>



        <Modal isOpen={open} className="my-modal">
            <MyModal/>
        <ModalFooter>
        <div className="edit-button"></div>
        </ModalFooter>
        </Modal>
        </>
    )
}

export default MyAnnouncement