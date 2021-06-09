import React, {Fragment, useState} from 'react';

const Form = ()=> {
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    })

    const handleInputChance = (event)=> {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event)=> {
        event.preventDefault();
        console.log(`Mi nombre es: ${datos.nombre}  ${datos.apellido}`)
    }

    return(
        <div className="Container mt-5 Form">
            <Fragment>
                <h1>Sing up</h1>
                <hr></hr>
                <form onSubmit={enviarDatos}>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">First Name</label>
                        <input
                            type="text"
                            class="form-control b-color"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="nombre"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">Last Name</label>
                        <input
                            type="text"
                            class="form-control b-trans"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="apellido"
                            onChange={handleInputChance}
                        />
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control b-trans" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlSelect1">Age</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>18-20</option>
                        <option>20-30</option>
                        <option>30-40</option>
                        <option>40-50</option>
                        <option>Mayor de 50 años</option>
                        </select>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">Type of work</label>
                        <input type="email" class="form-control b-trans" id="exampleFormControlInput1" placeholder="example: Software Developer"/>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">Incomes</label>
                        <input type="email" class="form-control b-trans" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlInput1">Phone Number</label>
                        <input type="email" class="form-control b-trans" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="form-group form-item">
                        <label for="exampleFormControlTextarea1">References</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div>
                        <button class="btn btn-primary Margin-left">Send</button>
                    </div>
                </form>
            </Fragment>
            
        </div>  
    )
}

export default Form