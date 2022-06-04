import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Modal({ closeModal }) {
    const [passwordInfo, setPasswordInfo] = useState({
        username: "",
        password: "",
        repassword: ""
    });
    const [errMessage, setErrMessage] = useState("");
    
    const setParams = (event) => {
        let previousState = passwordInfo;
        setPasswordInfo({ ...previousState, [event.target.name]: event.target.value });
    }
    const errorMessage = (errMessage != "" && <span className='errMessage'>{errMessage}</span>)

    const resetPassword = (event) => {
        event.preventDefault();
        if (passwordInfo.username.length < 6) {
            return (setErrMessage("Username must be from 6 characters"))
        }
        if (passwordInfo.password.length < 6) {
            return (setErrMessage("Password must be from 6 characters"))
        }
        if(passwordInfo.password != passwordInfo.repassword) {
            return(setErrMessage("New Password and Confirm Password do not match"))
        }
        axios({
            method: 'put',
            url: 'https://backendjava16.herokuapp.com/api/v1/user/resetPassword',
            data: passwordInfo
        }).then(res => {
            console.log(res);
            closeModal(false);            
            alert("Your password have been reset!");
        }).catch(err => {            
            console.log(err);
            setErrMessage(err.response.data.error);
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
        <div >
            <div className="forgotPasswordModalBackground" >
                <div className="forgotPasswordModalContainer">
                    <div className="title">
                        <h1>Change Password</h1>
                    </div>
                    <form className="body">
                        <div>
                            <label>Username</label>
                            <input type='text' name='username' id='username' onChange={setParams}></input><br />
                        </div>
                        <div>
                            <label>New Password</label>
                            <input type='password' name='password' id='password' onChange={setParams}></input>
                        </div>
                        <div>
                            <label>Confirm New Password</label>
                            <input type='password' name='repassword' id='repassword' onChange={setParams}></input>
                        </div>
                        {errorMessage}
                        <div className="footer">
                            <button type='submit' className="btnLogin" onClick={resetPassword}>OK</button>
                            <button className="btnCancel" onClick={() => closeModal(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}