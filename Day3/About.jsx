import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/About.css'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='about'>
            <h1>About Yoga Academy</h1><br/>
            <h3>At Yoga Academy, we offer a wide range of online yoga sessions tailored to meet the unique needs and goals<br/> 
                  of individuals of all ages and body types. Our experienced instructors provide personalized guidance <br/>
                    based on specific ailments and fitness objectives, ensuring each practice is safe, effective<br/>
                       and enjoyable. Whether you're a beginner or an experienced yogi, we offer virtual <br/>
                          classes that focus on stress relief, flexibility, mindfulness, physical <br/>
                              and mental health, and self-care. Join us today and experience <  br/>
                                        the transformative power of yoga.</h3>
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default About