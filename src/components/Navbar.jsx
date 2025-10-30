import React from 'react'
import myLogo from '../assets/flickr_logo_dots.7670d27a.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black bg-opacity-25 fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Link to='/'><img src={myLogo} alt="Logo" width="100" height="34" /></Link>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <input className="form-control me-5 w-50 mx-auto" type="search" placeholder="Q Photos, people, or groups "
                            aria-label="Search" />

                        <Link to="/signin" ><button className="btn bg-none text-white" type="submit">Log in</button></Link>
                        <Link to="/signup">
                            <button className="btn bg-white" type="submit">Sign up</button>
                        </Link>
                        <form role="search" />
                    </div>
                </div>
        </nav >
        </>
    )
}

export default Navbar