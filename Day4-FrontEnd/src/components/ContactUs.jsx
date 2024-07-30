import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../assets/css/ContactUs.css';
import ToasterFunc from './ToasterFunc';
import toast from 'react-hot-toast';
const ContactUs = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c1d2355c-eca8-49ff-a46a-0af94b3a3001");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Message sent successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <Navbar />
        <ToasterFunc/>
        <div className='Contact'>
        <h2>Contact Yoga Academy</h2>
        <form onSubmit={onSubmit}>
            <label>Name</label>
          <input type="text" name="name" required/>
            <label>Email</label>
          <input type="email" name="email" required/>
            <label>Message</label>
          <textarea name="message" required></textarea>
  
          <button type="submit">Submit Form</button>
  
        </form>
        </div>
        <span>{result}</span>
        <Footer />
      </div>
    );
  }
export default ContactUs