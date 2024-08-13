import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Context } from './GlobeData';
import { getPlans, addPlan, deletePlan, updatePlan, updateUserPlans, getUserData } from '../assets/JSON/API';
import '../assets/css/Plans.css';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const { userData, LogIn, isAdmin } = useContext(Context);
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ name: '', price: '', time: '', description: ''});
  const [editingPlan, setEditingPlan] = useState(null);
  const [viewingPlan, setViewingPlan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getPlans();
        setPlans(data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const handlePurchase = async (plan) => {
    if (!userData) {
      alert('Please log in to purchase a plan');
      return;
    }

    const updatedPlans = [...(userData.plans || []), plan];
    await updateUserPlans(userData.id, updatedPlans);
    const updatedUser = await getUserData(userData.id);
    LogIn(updatedUser);
    navigate("/payment");
    // alert(`You have successfully purchased the ${plan.name} plan!`);
  };

  const handleAddPlan = async () => {
    if (newPlan.name && newPlan.price && newPlan.time && newPlan.description) {
      try {
        const addedPlan = await addPlan(newPlan);
        setPlans([...plans, addedPlan]);
        setNewPlan({ name: '', price: '', time: '', description: ''});
      } catch (error) {
        console.error('Error adding plan:', error);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleDeletePlan = async (id) => {
    try {
      await deletePlan(id);
      setPlans(plans.filter(plan => plan.id !== id));
    } catch (error) {
      console.error('Error deleting plan:', error);
    }
  };

  const handleEditClick = (plan) => {
    setEditingPlan(plan);
  };

  const handleUpdatePlan = async () => {
    if (editingPlan.name && editingPlan.price && editingPlan.time && editingPlan.description) {
      try {
        const updatedPlan = await updatePlan(editingPlan.id, editingPlan);
        setPlans(plans.map(plan => (plan.id === updatedPlan.id ? updatedPlan : plan)));
        setEditingPlan(null);
      } catch (error) {
        console.error('Error updating plan:', error);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleViewDetails = (plan) => {
    setViewingPlan(plan);
  };

  const closeOverlay = () => {
    setViewingPlan(null);
  };

  return (
    <div className="plans-container">
      <Navbar />
      <h1 className="plans-title" style={{color:"white"}}>Popular Yoga Plans At Our Academy</h1>
      {isAdmin && (
        <div className="add-plan-form">
          <h2 className="form-title">{editingPlan ? 'Edit Plan' : 'Add New Plan'}</h2>
          <input
            className="form-input"
            type="text"
            placeholder="Plan Name"
            value={editingPlan ? editingPlan.name : newPlan.name}
            onChange={(e) => editingPlan ? setEditingPlan({ ...editingPlan, name: e.target.value }) : setNewPlan({ ...newPlan, name: e.target.value })}
          />
          <input
            className="form-input"
            type="number"
            placeholder="Plan Price"
            value={editingPlan ? editingPlan.price : newPlan.price}
            onChange={(e) => editingPlan ? setEditingPlan({ ...editingPlan, price: e.target.value }) : setNewPlan({ ...newPlan, price: e.target.value })}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Plan Time"
            value={editingPlan ? editingPlan.time : newPlan.time}
            onChange={(e) => editingPlan ? setEditingPlan({ ...editingPlan, time: e.target.value }) : setNewPlan({ ...newPlan, time: e.target.value })}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Plan Description"
            value={editingPlan ? editingPlan.description : newPlan.description}
            onChange={(e) => editingPlan ? setEditingPlan({ ...editingPlan, description: e.target.value }) : setNewPlan({ ...newPlan, description: e.target.value })}
          />
          <button className="form-button" onClick={editingPlan ? handleUpdatePlan : handleAddPlan}>
            {editingPlan ? 'Update Plan' : 'Add Plan'}
          </button>
        </div>
      )}
      <div className="plans-list">
        {plans.map((plan) => (
          <div className="plan-item" key={plan.id}>
            <div className="plan-text">
              <h2 className="plan-name">{plan.name}</h2>
              <p className="plan-price">₹{plan.price}</p>
              <p className="plan-time">{plan.time}</p>
              {!isAdmin && (
                <button className="view-details-button" onClick={() => handleViewDetails(plan)}>View Details</button>
              )}
              {!isAdmin && (
                <button className="buy-now-button" onClick={() => handlePurchase(plan)}>Buy Now</button>
              )}
              {isAdmin && (
                <>
                  <button className="edit-button" onClick={() => handleEditClick(plan)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDeletePlan(plan.id)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {viewingPlan && (
        <div className="overlay">
          <div className="overlay-content">
            <h2 className="overlay-title">{viewingPlan.name}</h2>
            <p className="overlay-description">{viewingPlan.description}</p>
            <button className="close-button" onClick={closeOverlay}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Plans;
