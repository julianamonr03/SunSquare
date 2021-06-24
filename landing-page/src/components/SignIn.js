import React from 'react';
import { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="sign-in">
            <Fragment>
                <h1>Sign In</h1>
                <form>
                    <div className="sign-item">
                        <label for="exampleFormControlInput1">User Name</label>
                        <input
                            type="text"
                            className="input-t"
                            id="exampleFormControlInput1"
                            placeholder="Ej: Martin Corredor"
                            name="name"
                        />
                    </div>
                    <div className="sign-item">
                        <label for="exampleFormControlInput1">Password</label>
                        <input
                            type="text"
                            className="input-t"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="name"
                        />
                    </div>
                    <hr/>
                    <div>
                        <Link to="/my-announcements"  className="btn btn-primary my-button">
                            Send
                        </Link>
                    </div>
                </form>

            </Fragment>
        </div>
    )
}

export default SignIn