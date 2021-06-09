import React, {Fragment, useState} from 'react';


const CreateAd = ()=> {
    return(
        <div className="Container mt-5 Form">
            <Fragment>
                <h1>Your advertisement</h1>
                <hr></hr>
                <form>
                    <div class="form-group form-item">
                        <label for="exampleFormControlSelect1">Type</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>Arriendo</option>
                        <option>Venta</option>
                        </select>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">Price</label>
                        <input type="email" class="form-control b-color" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">City</label>
                        <input type="email" class="form-control b-trans" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">Neighborhood</label>
                        <input type="email" class="form-control b-trans" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlSelect1">Number of Rooms</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4 or more</option>
                        </select>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlSelect1">Number of Bathrooms</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4 or more</option>
                        </select>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlSelect1">Carpark</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>It doesn't have</option>
                        <option>1</option>
                        <option>2 or more</option>
                        </select>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlSelect1">Buildingfees</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        </select>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">Contact Number</label>
                        <input type="email" class="form-control b-trans" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlTextarea1">Footage</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div>
                        <button class="btn btn-primary Margin-left">Create</button>
                    </div>
                </form>
            </Fragment>
            
        </div>  
    )
}

export default CreateAd