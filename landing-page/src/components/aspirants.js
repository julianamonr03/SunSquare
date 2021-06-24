import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const Aspirant = ()=> {
    const aspirants = [
        {
            firstName: "Juliana",
            lastName: "Monroy",
            email: "julianamonr03@gmail.com",
            age: "23",
            typeOfWork: "Software Engineer",
            incomes: "7'000.000",
            phoneNumber: "3125647389",
            references: "",
            img:"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            firstName: "Martin",
            lastName: "Corredor",
            email: "dev.martincorredor@gmail.com",
            age: "25",
            typeOfWork: "Civil Engineer",
            incomes: "6'000.000",
            phoneNumber: "3224682353",
            references: ""
        },
        {
            firstName: "Nelson",
            lastName: "Arevalo"
        },
        {
            firstName: "Oscar",
            lastName: "Torres"
        },
        {
            firstName:"Teresa",
            lastName:"Amaya"
        },
        {
            firstName:"Luis",
            lastName:"Perez"
        }
    ]

    const [open, setOpen] = useState(false)

    const openAsp = ()=> {
        setOpen(true);
    }
    const closeAsp = ()=> {
        setOpen(false);
    }

    return (
        <>
        <div className="announ-asp-section">
                <div className="bold">
                    Aspirants
                </div>
                <div className="aspirant">
                    Juliana Monroy
                    <div className="aspirant-button" onClick={openAsp}>View</div>
                </div>
                <div className="aspirant">
                    Martin Corredor
                    <div className="aspirant-button" onClick={openAsp}>View</div>
                </div>
        </div>


        <Modal isOpen={open} className="my-modal aspirant-modal">
            <ModalHeader className="bold aspirant-modal-header">
                <img className="aspirant-modal-img" src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                <div className="aspirant-modal-name">{aspirants[0].firstName} {aspirants[0].lastName}</div>
            </ModalHeader>
            <ModalBody>
                <div><span className="bold">Email: </span>{aspirants[0].email}</div>
                <div><span className="bold">Age: </span>{aspirants[0].age}</div>
                <div><span className="bold">Type of work: </span>{aspirants[0].typeOfWork}</div>
                <div><span className="bold">Incomes: </span>{aspirants[0].incomes}</div>
                <div><span className="bold">Phone Number: </span>{aspirants[0].phoneNumber}</div>
            </ModalBody>
            <ModalFooter>
                <div className="edit-button" onClick={closeAsp}>Accept</div>
                <div className="delete-button" onClick={closeAsp}>Reject</div>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default Aspirant