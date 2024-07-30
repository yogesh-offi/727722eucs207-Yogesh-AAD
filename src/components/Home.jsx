import React, { useContext } from 'react'
import '../assets/css/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'
import { Context } from './GlobeData';
import img4 from 'D:/AAD/app/src/assets/images/img4.jpg';
import { useInView } from 'react-intersection-observer';

const Home = () => {

    const {loggedIn} = useContext(Context);

    const {ref,inview} = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    const naviagte = useNavigate();
    const onhandleStart = () => {
        naviagte('/plans');
    }
    const onhandleJoin = () => {
        (loggedIn)?naviagte('/plans'):naviagte('/login');
    }

  return (
    <div className='home'>
        <Navbar />
        <div className='home1'>
            {/* {(loggedIn)?<div>Vanakkam</div>:<div>Good Day</div>} */}
            <h1></h1>
            <div className='hero'>
            <div className="hero-content">
                <h1>Discover Yourself<br />Discover Yoga</h1>
                <p>We share the transformative power of yoga with every mind, every body, everywhere</p>
                <button className="join-now-btn" onClick={onhandleJoin}>Join Now</button>
                <div className="member-info">
                    <p>More than 1.5k members are registered now</p>
                </div>
                <div className="statistics">
                    <div>
                        <h2>30+</h2>
                        <p>-Live Sessions</p>
                    </div>
                    <div>
                        <h2>12k+</h2>
                        <p>-Active Members</p>
                    </div>
                    <div>
                        <h2>60%</h2>
                        <p>-Engagement Rate</p>
                    </div>
                    <div>
                        <h2>95%</h2>
                        <p>-User Satisfaction</p>
                    </div>
                </div>
                <div className="testimonials">
                    <blockquote>
                        "I feel fit for online yoga programs. I can work out without going to the gym and change my body shape."
                        <cite>- KaataMuthu, California</cite>
                    </blockquote>
                    <blockquote>
                        "Absolutely love it. On the next stage for me to do more mindful yoga at home."
                        <cite>- Nagaraj, New York</cite>
                    </blockquote>
                </div>
            </div>
            <div className="hero-image">
                <img src={img4} alt="Yoga" />
            </div>
            </div>
            <div ref={ref} className={'box1 '+((inview)?"Magic":"")}>
            <div className='piceven0'></div>
            <div className='texteven'>
                <p><p className='pheading'>Welcome to Yoga Academy<br/></p>
                Yoga has always been something more, than just a workout routine. 
                It's always been more of a philosophy, 
                a lifestyle for a mind & body balance.</p>
            </div>
            </div>
            <div className='box2'>
            <div className='picodd1'></div>
            <div className='textodd'>
                <p><p className='pheading'>Yoga Academy for Everyone<br/></p>
                Through and through we were trying to make our Yoga studio a peaceful, 
                meditational place of tranquility, which according to our ever-growing 
                list of attendees we've succeeded at.</p>
            </div>
            </div>
            <div className='box3'>
            <div className='piceven2'></div>
            <div className='texteven'>
                <p><p className='pheading'>Find lifestyle to the yoga<br/></p>
                Through and through we were trying to make our Yoga studio a peaceful, 
                meditational place of tranquility, which according to our ever-growing 
                list of attendees we've succeeded at.</p>
            </div>
            </div>
            <div className='box2'>
            <div className='picodd3'></div>
            <div className='textodd'>
                <p><p className='pheading'>Corporate Yoga<br/></p>
                Through and through we were trying to make our Yoga studio a peaceful, 
                meditational place of tranquility, which according to our ever-growing 
                list of attendees we've succeeded at.</p>
            </div>
            </div>
            <button className='homebtn' onClick={onhandleStart}>Start with us</button>
        </div>
       <div className='Footer'>
        <Footer/>
        </div> 
    </div>
  )
}

export default Home