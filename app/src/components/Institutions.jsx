import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInstitutions, getInstitutionPlans, addInstitution, addInstitutionPlan, updateInstitutionPlan, deleteInstitutionPlan, deleteInstitution } from '../assets/JSON/API';
import Navbar from './Navbar';
import '../assets/css/Institutions.css';

const Institutions = () => {
    const [institutions, setInstitutions] = useState([]);
    const [institutionName, setInstitutionName] = useState('');
    const [institutionEmail, setInstitutionemail] = useState('');
    const [selectedInstitutionId, setSelectedInstitutionId] = useState(null);
    const [plans, setPlans] = useState([]);
    const [editingPlan, setEditingPlan] = useState(null);
    const [plan, setPlan] = useState({ name: '', price: '', time: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInstitutions = async () => {
            const data = await getInstitutions();
            setInstitutions(data);
        };
        fetchInstitutions();
    }, []);

    useEffect(() => {
        if (selectedInstitutionId) {
            const fetchPlans = async () => {
                const data = await getInstitutionPlans(selectedInstitutionId);
                setPlans(data);
            };
            fetchPlans();
        }
    }, [selectedInstitutionId]);

    const handleAddInstitution = async (e) => {
        e.preventDefault();
        if (institutionName.trim()) {
            const newInstitution = await addInstitution({ name: institutionName , email: institutionEmail});
            setInstitutions([...institutions, newInstitution]);
            setInstitutionName('');
        }
    };

    const handleAddPlan = async (e) => {
        e.preventDefault();
        const newPlan = await addInstitutionPlan(selectedInstitutionId, plan);
        setPlans([...plans, newPlan]);
        setPlan({ name: '', price: '', time: '' });
    };

    const handledelete = async(id) => {
        await deleteInstitution(id);
        setInstitutions(institutions.filter(institution => institution.id !== id));
    }

    const handleUpdatePlan = async (planId) => {
        const updated = await updateInstitutionPlan(selectedInstitutionId, planId, plan);
        setPlans(plans.map(p => (p.id === planId ? updated : p)));
        setEditingPlan(null);
        setPlan({ name: '', price: '', time: '' });
    };

    const handleDeletePlan = async (planId) => {
        await deleteInstitutionPlan(selectedInstitutionId, planId);
        setPlans(plans.filter(plan => plan.id !== planId));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlan({ ...plan, [name]: value });
    };

    return (
        <div>
            <Navbar />
        <div className="institutions-page">
            <div className="institutions-container">
                <h1 className="institutions-title">Manage Institutions</h1>
                <form className="institution-form" onSubmit={handleAddInstitution}>
                    <input 
                        type="text" 
                        className="institution-input"
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder="Institution Name"
                        required
                    />
                    <input 
                        type="text" 
                        className="institution-input"
                        value={institutionEmail}
                        onChange={(e) => setInstitutionemail(e.target.value)}
                        placeholder="email"
                        required
                    />
                    <button type="submit" className="institution-button">Add Institution</button>
                </form>
                <ul className="institutions-list">
                    {institutions.map(institution => (
                        <li key={institution.id} className="institution-item">
                            {institution.name}
                            {/* <button 
                                className="manage-plans-button" 
                                onClick={() => setSelectedInstitutionId(institution.id)}
                            >
                                Manage Plans
                            </button> */}
                            <button 
                                className="manage-plans-button" 
                                onClick={() => handledelete(institution.id)}
                            >
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
                {selectedInstitutionId && (
                    <div className="plans-container">
                        <h1 className="plans-title">Manage Plans</h1>
                        <form 
                            className="plan-form" 
                            onSubmit={editingPlan ? (e) => handleUpdatePlan(editingPlan.id) : handleAddPlan}
                        >
                            <input
                                type="text"
                                name="name"
                                className="plan-input"
                                value={plan.name}
                                onChange={handleChange}
                                placeholder="Plan Name"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                className="plan-input"
                                value={plan.price}
                                onChange={handleChange}
                                placeholder="Price"
                                required
                            />
                            <input
                                type="text"
                                name="time"
                                className="plan-input"
                                value={plan.time}
                                onChange={handleChange}
                                placeholder="Time"
                                required
                            />
                            <button type="submit" className="plan-button">
                                {editingPlan ? 'Update Plan' : 'Add Plan'}
                            </button>
                        </form>
                        <ul className="plans-list">
                            {plans.map(plan => (
                                <li key={plan.id} className="plan-item">
                                    {plan.name} - ₹{plan.price} - {plan.time}
                                    <button 
                                        className="edit-plan-button" 
                                        onClick={() => {
                                            setEditingPlan(plan);
                                            setPlan(plan);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="delete-plan-button" 
                                        onClick={() => handleDeletePlan(plan.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Institutions;
