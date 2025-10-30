import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center pt-5'>
                <div>
                </div>
                <div>
                    <h1>Page Not Found</h1>
                    <p>We couldn’t find the page you are looking for</p>
                    <p>We couldn’t find the page you are looking for</p>
                        <button className='btn btn-primary' onClick={()=>{navigate('/')}}>Go to homepage</button>
                </div>
            </div>
        </>
    )
}

export default Notfound