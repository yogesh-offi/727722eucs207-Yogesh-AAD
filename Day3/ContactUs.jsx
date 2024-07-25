import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const ContactUs = () => {
    const[name,setname]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const onhandleName = (e)=>{
        setname(e.target.value);
    }
    const onhandleEmail = (e)=>{
        setname(e.target.value);
    }
    const onhandleMessage = (e)=>{
        setname(e.target.value);
    }
    const onhandleSend = (e)=>{
        e.preventDefault();
        console.log(name,email,message);
    }
  return (
    <div>
        <Navbar/>
        <div className='Login'>
            <h1>Contact Yoga Academy</h1>
            <form>
                    <label>Name</label>
                    <input type='text' placeholder='Enter your Name' onChange={onhandleName}/>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' onChange={onhandleEmail} />
                    <label>Message</label>
                    <input type='text' placeholder='Enter Message' onChange={onhandleMessage} />
                    <button onClick={onhandleSend}>Send</button>
                </form>
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default ContactUs