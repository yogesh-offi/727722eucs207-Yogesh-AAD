import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { getData } from '../assets/JSON/API';
import Navbar from './Navbar';
import Alert from '@mui/material/Alert';
import '../assets/css/Navbar.css';
import Footer from './Footer';
import { Context } from './GlobeData';
export const Login = () => {

    const {LogIn} = useContext(Context);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data,setData]=useState([]);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {

        const fetch = async() => {
            const res = await getData();
            setData(res.data);
        }
        fetch();
    },[]);

    const navigate = useNavigate();

    const onhandleUsername = (e) => {
        setUsername(e.target.value);
    }

    const onhandlePassword = (e) => {
        setPassword(e.target.value);
    }

    const onhandleLogin = (e) => {
        navigate('/Signup');
    }

    const onhandleSubmit = (e) => {
        e.preventDefault();
        if(username==="")
        {
            alert('Please enter Username');
            return;
        }
        else if(password==="")
        {
            alert('Please enter Password');
            return;
        }
        const uindex =  data ? data.findIndex(({uname})=>uname === username):-1;
        if(uindex === -1)
        {
            alert('Invalid Username');
        }
        else if(data[uindex].password !== password)
        {
            alert('Invalid Password');
        }
        else
        {
            setShowAlert(true);
            LogIn();
            // navigate('/home');
        }
    }

    return (
        <div>
            <Navbar/>
            <div className='Login'>
                <h1>Login</h1>
                <form>
                    <label>Username</label>
                    <input type='text' placeholder='Username' onChange={onhandleUsername} />
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' onChange={onhandlePassword} />
                    <button onClick={onhandleSubmit}>Login</button>
                    <p>Don't have an account? <span onClick={onhandleLogin}>Sign Up</span></p>
                </form>
                {(showAlert)? (
                    <Alert severity="success" onClose={() => {setShowAlert(false);navigate('/home')}}>
                        Login Successful!
                    </Alert>
                ):<></>}
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Login;
