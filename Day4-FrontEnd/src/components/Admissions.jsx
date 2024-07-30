// import React, { useContext, useEffect, useState } from 'react';
// import Navbar from './Navbar';
// // import Footer from './Footer';
// import { Context } from './GlobeData';
// import { getUserData,updateUserPlans } from '../assets/JSON/API';
// import '../assets/css/Admissions.css';

// const Admissions = () => {
//     const { userData } = useContext(Context);
//     const [purchasedPlans, setPurchasedPlans] = useState([]);
//     useEffect(() => {
//       const fetchUserPlans = async () => {
//         if (userData) {
//           try {
//             const data = await getUserData(userData.id);
//             setPurchasedPlans(data.Plans || []);
//           } catch (error) {
//             console.error("Error fetching user data:", error);
//           }
//         }
//       };
//       fetchUserPlans();
//     }, [userData]);

//   const handleCancelPlan = async (planName) => {
//     try {
//       const updatedPlans = purchasedPlans.filter(plan => plan.name !== planName);
//       await updateUserPlans(userData.id, updatedPlans);
//       setPurchasedPlans(updatedPlans);
//       alert(`You have successfully canceled the ${planName} plan!`);
//     } catch (error) {
//       console.error("Error canceling plan:", error);
//     }
//   };

//   return (
//     <div className='admissions'>
//       <Navbar />
//       <h1>Purchased Plans</h1>
//       {purchasedPlans.length > 0 ? (
//         <ul>
//           {purchasedPlans.map((plan, index) => (
//             <li key={index}>
//               <h2>{plan.name}</h2>
//               <p>₹{plan.price}</p>
//               <p>{plan.time}</p>
//               <button onClick={() => handleCancelPlan(plan.name)}>Cancel</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No plans purchased yet.</p>
//       )}
//     </div>
//   );
// };

// export default Admissions;

import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Context } from './GlobeData';
import { getUserData, updateUserPlans } from '../assets/JSON/API';
import '../assets/css/Admissions.css';

const Admissions = () => {
    const { userData, LogIn } = useContext(Context);
    const [purchasedPlans, setPurchasedPlans] = useState([]);

    useEffect(() => {
        const fetchUserPlans = async () => {
            if (userData) {
                try {
                    const data = await getUserData(userData.id);
                    setPurchasedPlans(data.Plans || []);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserPlans();
    }, [userData]);

    const handleCancelPlan = async (planName) => {
        try {
            const updatedPlans = purchasedPlans.filter(plan => plan.name !== planName);
            await updateUserPlans(userData.id, updatedPlans);
            setPurchasedPlans(updatedPlans);

            // Update the userData in the context and local storage
            const updatedUser = { ...userData, Plans: updatedPlans };
            LogIn(updatedUser);

            alert(`You have successfully canceled the ${planName} plan!`);
        } catch (error) {
            console.error("Error canceling plan:", error);
        }
    };

    return (
        <div className='admissions'>
            <Navbar />
            <h1>Purchased Plans</h1>
            {purchasedPlans.length > 0 ? (
                <ul>
                    {purchasedPlans.map((plan, index) => (
                        <li key={index}>
                            <h2>{plan.name}</h2>
                            <p>₹{plan.price}</p>
                            <p>{plan.time}</p>
                            <button onClick={() => handleCancelPlan(plan.name)}>Cancel</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No plans purchased yet.</p>
            )}
        </div>
    );
};

export default Admissions;
