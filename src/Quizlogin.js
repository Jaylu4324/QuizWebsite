// import React from "react";
import { useState } from "react";
import React from 'react'

export default function Quizlogin(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dataSubmit = () => {
        // let localname = localStorage.getItem("Name");
        // let localEmail = localStorage.getItem("Email");
        // console.log(localEmail,localname)

        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        props.changePage()

    }
    return (
        <div className="container-fluid pt-5" style={{color:props.font,backgroundColor:props.pageBg,height:"90vh"}}>
            <form className="h-75 d-flex flex-column justify-content-center">
                <div className=" row justify-content-center align-items-center " >
                    <div className="col-md-6">
                        <div className="form-floating mb-3 ">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} required />
                            <label for="floatingInput">Email address</label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingPassword" placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} required />
                            <label for="floatingPassword">UserName</label>
                        </div>

                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-primary col-md-4  col-12 pt-2 pb-2 " onClick={() => { dataSubmit() }}>
                            Submit
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}
