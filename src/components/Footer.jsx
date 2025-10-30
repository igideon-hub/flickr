import React from 'react'

const Footer = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                crossOrigin="anonymous"
            />
            <div className="nav bg-dark position-fixed bottom-0 start-0 w-100 " style={{ fontSize: "14px" }}>
                <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                <a className="nav-link text-white" href="#">Jobs</a>
                <a className="nav-link text-white" href="#">Blog</a>
                <a className="nav-link text-white" href="#">Advertise</a>
                <a className="nav-link text-white" href="#">Developers</a>
                <a className="nav-link text-white" href="#">Guidelines</a>
                <a className="nav-link text-white" href="#">Help</a>
                <a className="nav-link text-white" href="#">Help Forum</a>
                <a className="nav-link text-white" href="#">Privacy</a>
                <a className="nav-link text-white" href="#">Terms</a>
                <a className="nav-link text-white" href="#">Cookies</a>
                <a className="nav-link text-white" href="#">English</a>
                <a className="nav-link text-white" href="#">SmugMug+Flickr.</a>
                <a className="nav-link text-white" href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="nav-link text-white" href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="nav-link text-white" href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </>
    )
}

export default Footer