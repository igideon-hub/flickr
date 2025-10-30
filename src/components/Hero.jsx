import React from 'react'
import Firstimg from '../assets/A_Time_of_Change_Rachel_Brokaw.jpg'
import Secondimg from '../assets/benito_druck.jpg'
import Thirdimg from '../assets/Catwalk_am_Bahnhof_Zurich_Oerlikon_Peter_Arn.jpg'
import Fourthimg from '../assets/Cool_Power_commended-LPOTY_UK_Steve_Cole.jpg'
import Fifthimg from '../assets/Dawn_of_Another_Day_Sky_Matthews.jpg'
import Siximg from '../assets/Desert_Beauty_Christoph_Fischer.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{height: "100vh", overflow: "hidden"}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Firstimg} className="d-block w-100" style={{height: "100vh", objectFit: "cover"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Secondimg} className="d-block w-100" style={{height: "100vh", objectFit: "cover"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Thirdimg} className="d-block w-100" style={{height: "100vh", objectFit: "cover"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Fourthimg} className="d-block w-100" style={{height: "100vh", objectFit: "cover"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Fifthimg} className="d-block w-100" style={{height: "100vh", objectFit: "cover"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Siximg} className="d-block w-100" style={{height: "100vh", objectFit: "cover"}} alt="..." />
                    </div>

                    <div
                        className="carousel-caption"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            width: "100%",
                            padding: "0 1rem",
                        }}
                    >
                        <h5 style={{ fontSize: "56px", fontWeight: 600 }}>Find your inspiration.</h5>
                        <p style={{ fontSize: "24px", fontWeight: 400 }}>
                            Join the Flickr community, home to tens of billions of photos and 2 million groups.
                        </p>
                        <Link to="/signup">
                            <button className="btn bg-white text-dark rounded-3 p-3 fw-bold fs-4" type="submit">
                                Start for free
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero