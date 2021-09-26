import React, { useState } from 'react'

export const Login = () => {

    const [email, setemail] = useState('')
    const [name, setname] = useState('')

    const [empemail, setempemail] = useState('')
    const [empname, setempname] = useState('')


    const submit = (event) => {

        event.preventDefault();

        localStorage.setItem("email",JSON.stringify(email))
        localStorage.setItem("name",JSON.stringify(name))

        const empName = localStorage.getItem("name")
        const empEmail = localStorage.getItem("email")

        setempname(JSON.parse(empName))
        setempemail(JSON.parse(empEmail))


    }

    const remove = ()=>{

        localStorage.removeItem("name")
        localStorage.removeItem("email")

        console.log(localStorage.getItem("name"))
        localStorage.clear()
        setemail('')
        setname('')
    }



    return (
        <form onSubmit={submit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => (setemail(e.target.value))} />

            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e) => { setname(e.target.value) }} />

            </div>


            <button type="submit" class="btn btn-primary">Submit</button>

            <h1>{empname}</h1>
            <h1>{empemail}</h1>

            <button onClick={remove} class="btn btn-primary">REMOVE</button>

        </form>
    )
}
