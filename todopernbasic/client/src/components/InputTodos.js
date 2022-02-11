import React, { Fragment, useState } from "react";

export default function InputTodos () {
    const [ description, setDescription ] = useState("");
    // console.log(description);
    const submitForm = async e => {
        e.preventDefault();
        try {
                const inputText = { description };
                await fetch("http://localhost:5002/perntodos", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(inputText)
                });
            window.location ="/";
               
        } catch (err) {
            console.log(err.message);
        }
    };
    
    return (
        <Fragment>
            <h1 className="display-3 text-center my-5">Input <small className="text-muted">Todo</small> </h1>
            
            <form className="d-flex justify-content: space-between" onSubmit={submitForm}>
                <input 
                    type="text" 
                    placeholder="add todo" 
                    className="form-control" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
            
        </Fragment>

    );
}