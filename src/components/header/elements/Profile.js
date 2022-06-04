import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import userReducer from '../../../redux/reducers/userReducer';
import { addUser, removeUser } from '../../../redux/actions/userAction';


export default function Profile({ logged }) {
    const selector = useSelector((state)=>state.userReducer);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(removeUser())
        logged(false)
    }
    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        axios({
            method: 'get',
            url: 'https://backendjava16.herokuapp.com/api/v1/user/' + localStorage.getItem("username"),
            headers: {
                'Authorization': 'Bearer ' + selector.token,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            dispatch(addUser(res.data.content))
            console.log(selector)
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <div className='dropdown'>
            <button className='btn-dropdown'>Hi {localStorage.getItem("username")}</button>
            <div className='dropdown-item'>
                <a onClick={logout}>Logout</a>
            </div>
        </div>
    )
}