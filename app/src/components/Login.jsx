import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { getData } from '../assets/JSON/API';
import Navbar from './Navbar';
import '../assets/css/Navbar.css';
import Footer from './Footer';
import { Context } from './GlobeData';
import ToasterFunc from './ToasterFunc';
import toast from 'react-hot-toast';
import Loginimage from 'D:/AAD/app/src/assets/images/Loginimage.jpg';

const Login = () => {

    const {LogIn} = useContext(Context);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data,setData]=useState([]);

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
            toast.error('Please enter Username');
            return;
        }
        else if(password==="")
        {
            toast.error('Please enter Password');
            return;
        }
        const uindex =  data ? data.findIndex(({uname})=>uname === username):-1;
        if(uindex === -1)
        {
            toast.error('Invalid Username');
        }
        else if(data[uindex].password !== password)
        {
            toast.error('Invalid Password');
        }
        else
        {
            
            const user=data[uindex];
            LogIn(user);
            toast.success("Login Successful");
            setTimeout(()=>{
                navigate('/home');
            },2000)
        }
    }

    return (
        <div>
            <Navbar/>
            <ToasterFunc/>
                <h1>Login</h1>
            <div className='login-container'>
                <img src={Loginimage} alt="Login"></img>
                <div className='Login'>
                <form>
                    <label>Username</label>
                    <input type='text' placeholder='Username' onChange={onhandleUsername} />
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' onChange={onhandlePassword} />
                    <button onClick={onhandleSubmit}>Login</button>
                    <p>Don't have an account? <span onClick={onhandleLogin}>Sign Up</span></p>
                </form>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Login;
