import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/About.css'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='about-container'>
            <header className='about-header'>
                <h1>About Yoga Academy</h1>
            </header>
            <section className='about-content'>
                <div className='about-section'>
                    <h2>Our Mission</h2>
                    <p>At Yoga Academy, our mission is to promote physical and mental well-being through the practice of yoga. We offer a wide range of classes for all levels, from beginners to advanced practitioners.</p>
                </div>
                <div className='about-section'>
                    <h2>Our Instructors</h2>
                    <p>Our team of experienced and certified instructors is dedicated to helping you achieve your wellness goals. Each instructor brings their unique style and expertise to create a supportive and enriching environment.</p>
                </div>
                <div className='about-section'>
                    <h2>Our Facilities</h2>
                    <p>Our state-of-the-art facilities are designed to provide a tranquil and comfortable setting for your yoga practice. We offer spacious studios, modern equipment, and a serene atmosphere to enhance your experience.</p>
                </div>
            </section>
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default About