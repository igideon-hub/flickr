import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <StyledWrapper>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center pt-5'>
                <form className="form">
                <p className="message">Log in to Flickr </p>
                <label>
                    <input required placeholder type="email" className="input" />
                    <span>Email</span>
                </label>
                <button className="submit">Submit</button>
                <p className="signin">Don't have an account ? <Link to="/signup">Signup</Link> </p>
            </form>
            </div>
            
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: lightgray;
    padding: 30px;
    border-radius: 20px;
    position: relative;
}

.message, .signin {
    color: black;
    font-weight: 600;
    font-size: 14px;
}

.signin {
    text-align: center;
}

.signin a {
    color: royalblue;
}

.signin a:hover {
    text-decoration: underline royalblue;
}
.form label {
    position: relative;
}

.form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
}

.form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
}

.form label .input:valid + span {
    color: green;
}

.submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
}

.submit:hover {
    background-color: rgb(56, 90, 194);
}

@keyframes pulse {
    from {
    transform: scale(0.9);
    opacity: 1;
    }

    to {
    transform: scale(1.8);
    opacity: 0;
    }
}`;

export default Signin;
