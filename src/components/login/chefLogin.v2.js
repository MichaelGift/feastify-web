import {Link} from "react-router-dom";
import React from "react";

export default function ChefLogin() {
    return (
        <>
            <div className="container">
                <div className="d-flex flex-column align-items-center my-2">

                    <div className='d-flex flex-row my-5 shadow-sm p-0 m-0' style={{height: '600px'}}>
                        <div className='col-12 I col-md-6 m-0 rounded-start-2 h-100 p-0' style={{overflow: "hidden"}}>
                            <img
                                src='https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt="splash"
                                height={600}
                                className='rounded-start-2'
                            />
                        </div>
                        <div className="col-12 col-md-6 m-0 rounded-end-2" style={{overflow: 'hidden'}}>
                            <form className='d-flex flex-column h-100 rounded-end-2'>
                                <div className="display-6 mt-2 fw-medium mt-auto text-capitalize">Welcome back</div>

                                <div className="fs-6 fw-medium" style={{font: 'Nunito'}}>Sign in to continue</div>
                                <div className="mb-3 mt-5">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control rounded m-0" id="email"
                                           aria-describedby="emailHelp"/>
                                </div>

                                <div>
                                    <label htmlFor="password" className="form-label m-0">Password</label>
                                    <input type="password" className="form-control rounded m-0" id="password"/>
                                    <p className=''></p>
                                </div>


                                <div className="mb-1">
                                    <button type="submit" className="btn fs-5 fw-normal btn-primary px-5 w-100">Sign In
                                    </button>
                                </div>

                                <p className='mt-auto'>
                                    Don't have an account? <Link to="/chef-register"> Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}