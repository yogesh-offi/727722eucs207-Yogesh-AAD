import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { Context } from './GlobeData';
import ToasterFunc from './ToasterFunc';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const {loggedIn,LogOut,isAdmin} = useContext(Context);
    const handleProfile = () => {
      navigate('/profile');
    };
    const handleLogout = () => {
        LogOut();
        toast.success("Logout Successful");
        setTimeout(()=>{
            navigate('/home');
        },2000)
    }
  return (
    <div className='navbar'>
        <ToasterFunc/>
        <h2>Yoga Academy</h2>
        <button onClick={()=>{navigate('/home')}}>Home</button>
        <button onClick={()=>{navigate('/plans')}}>plans</button>
        {(isAdmin)?<button onClick={()=>{navigate('/courses')}}>Institutions</button>:''}
        {(loggedIn && !isAdmin)?<button onClick={()=>{navigate('/admissions')}}>Admission</button>:''}
        {(loggedIn && isAdmin)?<button onClick={()=>{navigate('/adminusers')}}>Users</button>:''}
        <button onClick={()=>{navigate('/about')}}>About</button>
        <button onClick={()=>{navigate('/contact')}}>ContactUs</button>
        {(loggedIn) ? (
                <div className="dropdown">
                    <button className="dropbtn">User Options</button>
                    <div className="dropdown-content">
                        <button onClick={handleProfile}>Profile</button>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            ) : (
                <button onClick={() => { navigate('/login') }}>Login/Sign Up</button>
            )}

    </div>
  )
}

export default Navbar;
