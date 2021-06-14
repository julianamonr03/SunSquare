import React from 'react';

const UserSearch = ()=> {
    return(
        <div className="Welcome-search">
            <div className="Align-center Search-space">
                <div className="input-group mb-3">
                    <select 
                        className="custom-select"
                        id="inputGroupSelect01"
                    >
                        <option value="1">Apartment</option>
                        <option value="2">House</option>
                    </select>
                </div>
            </div>
            <div className="Align-center Search-space Margin-left">
                <div className="input-group mb-3">
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                    >
                        <option value="1">On rent</option>
                        <option value="2">On sale</option>
                    </select>
                </div>
            </div>
            <input type="text" className="form-control Search-space-1 Margin-left" placeholder="City or Neighborhood" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>

            <button type="button" className="btn btn-primary Margin-left">Search</button>
        </div>
    )
}

const Welcome = ()=> {
    return(
        <div className="Welcome">
            <div className="Welcome-image">
                <img className="Image-1" src= "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80" alt="Home"></img>
            </div>
            <div className="Welcome-mesage">
                <div ></div>
                <div>¿What are you looking for?</div>
            </div>
            <UserSearch/>
        </div>
    )
}

export default Welcome;