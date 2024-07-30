import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getData = async () => await axios.get(`${API_URL}/UserData`);

export const postData = async (username, email, password, userRole) => {
    const { data: edata } = await getData();
    const newid = Math.max(...edata.map(user => user.id), 0) + 1;
    const ND = {
        uname: username,
        email: email,
        password: password,
        Role: userRole,
        id: newid,
        Plans: [] 
    };
    await axios.post(`${API_URL}/UserData`, ND);
};

export const showData = async () => {
    const res = await axios.get(`${API_URL}/UserData`);
    return res.data;
};

export const updateData = async (id, updatedUser) => {
    await axios.put(`${API_URL}/UserData/${id}`, updatedUser);
};

export const deleteData = async (id) => {
    await axios.delete(`${API_URL}/UserData/${id}`);
};

export const getUserData = async (id) => {
    const res = await axios.get(`${API_URL}/UserData/${id}`);
    return res.data;
};
export const setNewUserPassword = async (id,updatedUser) => {
    await axios.put(`${API_URL}/UserData/${id}`,updatedUser);
};

export const updateUserPlans = async (id, updatedPlans) => {
    try {
        const response = await axios.get(`${API_URL}/UserData/${id}`);
        const user = response.data;
        user.Plans = updatedPlans;
        
        await axios.put(`${API_URL}/UserData/${id}`, user);

        return user;
    } catch (error) {
        console.error('Error updating user plans:', error);
        throw error;
    }
};
