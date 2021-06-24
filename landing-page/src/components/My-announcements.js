import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import MyModal from './modal';
import Aspirant from './aspirants';



const MyAnnouncement = (props)=> {
    
    const [open, setOpen] = useState(false)

    const openModal = ()=> {
        setOpen(true);
    }
    const closeModal = ()=> {
        setOpen(false);
    }
    return (
        <div className="My-announcement">
            <div >
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
                <Aspirant/>        
            </div>



            <Modal isOpen={open} className="my-modal">
                <MyModal/>
            <ModalFooter>
            <div className="edit-button" onClick={closeModal}>Save</div>
            <div className="delete-button" onClick={closeModal}>Cancel</div>
            </ModalFooter>
            </Modal>
        </div>
    )
}

export default MyAnnouncement