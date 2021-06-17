import React from 'react';


const MyAnnouncement = (props)=> {
    return (
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
                <div className="edit-button">EDIT</div>
                <div className="delete-button">DELETE</div>
            </div>
        </div>
    )
}

export default MyAnnouncement