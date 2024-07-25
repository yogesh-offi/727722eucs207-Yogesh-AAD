import React, { useState,useEffect } from 'react';
// import axios from 'axios';
import { postData,getData } from '../assets/JSON/API';
import '../assets/css/Signup.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data,setData]=useState([]);

    useEffect(() => {

        const fetch = async() => {
            const res = await getData();
            setData(res.data);
        }
        fetch();
    },[]);

    const onhandleEmail = (e) => {
        setEmail(e.target.value);
    }

    const onhandlePassword = (e) => {
        setPassword(e.target.value);
    }

    const onhandleUsername = (e) => {
        setUsername(e.target.value);
    }

    const onhandleSubmit = async(e) => {
        e.preventDefault();
        if(username==="")
        {
            alert('Username is required');
            return;
        }
        else if(email==="")
        {
            alert('Email is required');
            return;
        }
        else if(password==="")
        {
            alert('Password is required');
            return;
        }
        const uindex =  data ? data.findIndex(({uname})=>uname === username):-1;
        if(uindex !== -1)
        {
            alert("Username already taken");
            return;
        }
        else
        {
            const emails = data.map(item => item.email);
            if(emails.includes(email))
            {
                alert("Email already exists");
                return;
            }
            else
            {
                postData(username,email,password);
                alert("Signup successful");
                return;
            }
        }
    }

    return (
        <div>
            <Navbar/>
            <h1>Sign Up</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="text"  onChange={onhandleUsername} placeholder='Enter Any Username' />
                </label>
                <label>
                    Email:
                    <input type="email" name="email"  onChange={onhandleEmail} placeholder='Enter your email' />
                </label>
                <label>
                    Password:
                    <input type="password" name="password"  onChange={onhandlePassword} placeholder='Enter Any Password' />
                </label>
                <input type="submit" onClick={onhandleSubmit} value="Sign Up" />
            </form>
            <div><Footer/></div>
        </div>
    );
}

export default Signup;
