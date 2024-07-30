import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/Plans.css';
import plan1 from 'D:/AAD/app/src/assets/images/plan1.webp';
import plan2 from 'D:/AAD/app/src/assets/images/plan2.webp';
import plan3 from 'D:/AAD/app/src/assets/images/plan3.webp';
import plan4 from 'D:/AAD/app/src/assets/images/plan4.webp';
import plan5 from 'D:/AAD/app/src/assets/images/plan5.webp';
import plan6 from 'D:/AAD/app/src/assets/images/plan6.webp';
import { Context } from './GlobeData';
import { getUserData, updateUserPlans } from '../assets/JSON/API';

const Plans = () => {
  const { userData, LogIn , isAdmin } = useContext(Context);

  const handlePurchase = async (plan) => {
    if (!userData) {
      alert("Please log in to purchase a plan");
      return;
    }

    const updatedPlans = [...(userData.plans || []), plan];
    await updateUserPlans(userData.id, updatedPlans);
    const updatedUser = await getUserData(userData.id);
    console.log("Updated user after purchase:", updatedUser);
    LogIn(updatedUser);
    alert(`You have successfully purchased the ${plan.name} plan!`);
  };

// const handlePurchase = async (plan) => {
//     if (userData) {
//       try {
//         if (plan) {
//           await updateUserPlans(userData.id, plan);
//           alert('Plan purchased successfully!');
//         } else {
//           console.error("Error: Plan is undefined.");
//         }
//       } catch (error) {
//         console.error("Error purchasing plan:", error);
//       }
//     } else {
//       alert('Please log in to purchase a plan.');
//     }
//   };

  const plans = [
    { id:1, name: 'Quick Bite Yoga', price: 999, time: '05:30 am - 06:15 am', image: plan1 },
    { id:2, name: 'Yoga For Beginners', price: 499, time: '05:00 pm - 06:00 pm', image: plan2 },
    { id:3, name: 'Meditation Weekend', price: 799, time: '05:30 am - 06:15 am', image: plan3 },
    { id:4, name: 'Personalized Yoga Session', price: 9999, time: 'Flexible time', image: plan4 },
    { id:5, name: 'Fitness Yoga', price: 399, time: '07:00 am - 08:00 am', image: plan5 },
    { id:6, name: 'Evening Yoga', price: 399, time: '05:00 pm - 06:00 pm', image: plan6 }
  ];

  return (
    <div className='plan'>
      <Navbar />
      <h1>Popular Yoga Plans At Our Academy</h1>
      <div className='planlist1'>
        {plans.slice(0, 3).map((plan, index) => (
          <div className='planItem' key={index}>
            <div className='planPic'>
              <img src={plan.image} alt={plan.name} width={'300px'} height={"200px"} />
            </div>
            <div className='planText'>
              <h2>{plan.name}</h2>
              <p>₹{plan.price}</p>
              <p>{plan.time}</p>
              {(!isAdmin)?<button className='viewDetails'>View Details</button>:<button className='viewDetails'>Edit</button>}
              {(!isAdmin)?<button className='buyNow' onClick={() => handlePurchase(plan)}>Buy Now</button>:
              <button className='buyNow'>Delete</button>}
            </div>
          </div>
        ))}
      </div>
      <div className='planlist2'>
        {plans.slice(3).map((plan, index) => (
          <div className='planItem' key={index}>
            <div className='planPic'>
              <img src={plan.image} alt={plan.name} />
            </div>
            <div className='planText'>
              <h2>{plan.name}</h2>
              <p>₹{plan.price}</p>
              <p>{plan.time}</p>
              {(!isAdmin)?<button className='viewDetails'>View Details</button>:<button className='viewDetails'>Edit</button>}
              {(!isAdmin)?<button className='buyNow' onClick={() => handlePurchase(plan)}>Buy Now</button>:
              <button className='buyNow'>Delete</button>}
            </div>
          </div>
        ))}
      </div>
      <Footer style={{ position: "absolute", top: "975px" }} />
    </div>
  );
};

export default Plans;
