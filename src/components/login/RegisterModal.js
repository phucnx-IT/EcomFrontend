import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Modal({ closeModal, openLogin }) {
    const [registerInfo, setRegisterInfo] = useState({
        username: "",
        password: "",
        repassword: "",
        firstName: "",
        lastName: "",
        fullName: "",
        address: "",
        phoneNumber: "",
        status: "ACTIVE"
    });
    const [errMessage, setErrMessage] = useState("");
    
    const setParams = (event) => {
        let previousState = registerInfo;
        setRegisterInfo({ ...previousState, [event.target.name]: event.target.value });
    }
    const errorMessage = (errMessage != "" && <span className='errMessage'>{errMessage}</span>)

    const register = (event) => {
        event.preventDefault();
        if (registerInfo.username.length < 6) {
            return (setErrMessage("Username must be from 6 characters"))
        }
        if (registerInfo.password.length < 6) {
            return (setErrMessage("Password must be from 6 characters"))
        }
        if(registerInfo.password != registerInfo.repassword) {
            return(setErrMessage("New Password and Confirm Password do not match"))
        }
        axios({
            method: 'post',
            url: 'https://backendjava16.herokuapp.com/api/v1/user/register',
            data: registerInfo
        }).then(res => {
            console.log(res);
            closeModal(false);
            alert("You have created a new account!");
            openLogin(true);
        }).catch(err => {            
            console.log(err);
            let arrError = err.response.data.error;
            setErrMessage(arrError[0]);
        });

    }
    useEffect(() => {
        function handlerClose(event) {
            if (event.which === 27) {
                closeModal(false)
            }
        }

        document.addEventListener("keyup", handlerClose);
        return () => {
            document.removeEventListener("keyup", handlerClose);
        }
    }, [])

    return (
            <div className="registerModalBackground" >
                <div className="registerModalContainer"> 
                    <div className="title">
                        <h1>Register</h1>
                    </div>                   
                    <div className="body">
                        <div className="body-item">
                            <div>
                                <label className='required-field'>Username</label>
                                <input type='text' name='username' id='username' placeholder="Choose Your Username" onChange={setParams} required></input><br />
                            </div>
                            <div>
                                <label className='required-field'>Password</label>
                                <input type='password' name='password' id='password' placeholder="Your password" onChange={setParams} required></input>
                            </div>
                            <div>
                                <label className='required-field'>Confirm Password</label>
                                <input type='password' name='repassword' id='repassword' placeholder="Re-enter your password" onChange={setParams} required></input>
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Please enter 11 digits" pattern="[0-9]{11}" onChange={setParams}></input>
                            </div>
                        </div>
                        <div className="body-item">                
                            <div>
                            <div>
                                <label>Full Name</label>
                                <input type='text' name='fullName' id='fullname' placeholder="Your full name" onChange={setParams}></input>
                            </div>
                                <label>First Name</label>
                                <input type='text' name='firstName' id='firstName' placeholder="Your first name" onChange={setParams}></input>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type='text' name='lastName' id='lastName' placeholder="Your last name" onChange={setParams}></input>
                            </div>
                            <div>
                                <label>Address</label>
                                <input type='text' name='address' id='address' placeholder="Your address" onChange={setParams}></input>
                            </div>
                        </div>  
                    </div>
                    <div className='body'>                       
                        {errorMessage}   
                    </div>
                    <div className="footer">
                        <button type='submit' className="btnRegister" onClick={register}>Register</button>
                        <button className="btnCancel" onClick={() => closeModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>
    )
}