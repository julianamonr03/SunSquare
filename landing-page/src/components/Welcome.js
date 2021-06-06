import React from 'react';

const UserSearch = ()=> {
    return(
        <div className="Welcome-search">
            <div className="Align-center Search-space">
                <div class="input-group mb-3">
                    <select class="custom-select" id="inputGroupSelect01">
                        <option value="1">Apartamento</option>
                        <option value="2">Casa</option>
                    </select>
                </div>
            </div>
            <div className="Align-center Search-space">
                <div class="input-group mb-3">
                    <select class="custom-select" id="inputGroupSelect01">
                        <option value="1">Arriendo</option>
                        <option value="2">Venta</option>
                    </select>
                </div>
            </div>
            <input type="text" class="form-control Search-space-1" placeholder="Ciudad o barrio" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>

            <button type="button" class="btn btn-primary Margin-left">Search</button>
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
                <div >LOGO DE SUNSQUARE SI HAY JAJA</div>
                <div>Que buscas?</div>
            </div>
            <UserSearch/>
        </div>
    )
}

export default Welcome;