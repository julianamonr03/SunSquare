import React from 'react';
import { Fragment } from 'react';

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
                    <div className="">
                        <button className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>

            </Fragment>
        </div>
    )
}

export default SignIn