import React, { useContext, useState } from 'react';
import { Context } from './GlobeData';
import { setNewUserPassword } from '../assets/JSON/API';
import '../assets/css/Profile.css';
import Navbar from './Navbar';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ToasterFunc from './ToasterFunc';

const ProfilePage = () => {
    const { userData, setUserData, LogOut } = useContext(Context);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const handlePasswordChange = async () => {
        if (newPassword.trim() === '') {
            alert('Password cannot be empty');
            return;
        }

        const updatedUser = {
            ...userData,
            password: newPassword,
        };

        try {
            setNewUserPassword(userData.id, updatedUser);
            setUserData(updatedUser);
            localStorage.setItem('userData', JSON.stringify(updatedUser));
            toast.success('Password updated successfully');
        } catch (error) {
            console.error('Error updating password', error);
            alert('Failed to update password');
        }
    };
    // const handleLogout = () => {
    //     toast.success("Logout Successful");
    //     setTimeout(()=>{
    //         navigate('/home');
    //     },2000)
    //     LogOut();
    // }

    return (
        <>
            <Navbar/>
            <ToasterFunc/>
        <div className="profile-container">
            <div className="profile-card">
                <h1 className="profile-title">User Profile</h1>
                <p style={{textAlign:'center',paddingLeft:'40px'}}><strong>Username:</strong> {userData.uname}</p>
                <p style={{textAlign:'center',paddingLeft:'40px'}}><strong>Email:</strong> {userData.email}</p>
                <div className="profile-edit">
                    <h2 style={{textAlign:'center',paddingLeft:'40px'}}>Edit Password</h2>
                    <input 
                        type="password" 
                        placeholder="New Password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                    />
                    <button onClick={handlePasswordChange}>Save Password</button>
                </div>
                {/* <button className="logout-button" onClick={handleLogout}>Logout</button> */}
            </div>
        </div>
        </>
    );
};

export default ProfilePage;
