// import axios from 'axios';

// const API_URL = 'http://localhost:3001';

// export const getData = async () => await axios.get(`${API_URL}/UserData`);

// export const postData = async (username, email, password, userRole) => {
//     const { data: edata } = await getData();
//     const newid = Math.max(...edata.map(user => user.id), 0) + 1;
//     const ND = {
//         uname: username,
//         email: email,
//         password: password,
//         Role: userRole,
//         id: newid,
//         Plans: [] 
//     };
//     await axios.post(`${API_URL}/UserData`, ND);
// };

// export const showData = async () => {
//     const res = await axios.get(`${API_URL}/UserData`);
//     return res.data;
// };

// export const updateData = async (id, updatedUser) => {
//     await axios.put(`${API_URL}/UserData/${id}`, updatedUser);
// };

// export const deleteData = async (id) => {
//     await axios.delete(`${API_URL}/UserData/${id}`);
// };

// export const getUserData = async (id) => {
//     const res = await axios.get(`${API_URL}/UserData/${id}`);
//     return res.data;
// };
// export const setNewUserPassword = async (id,updatedUser) => {
//     await axios.put(`${API_URL}/UserData/${id}`,updatedUser);
// };

// export const updateUserPlans = async (id, updatedPlans) => {
//     try {
//         const response = await axios.get(`${API_URL}/UserData/${id}`);
//         const user = response.data;
//         user.Plans = updatedPlans;
        
//         await axios.put(`${API_URL}/UserData/${id}`, user);

//         return user;
//     } catch (error) {
//         console.error('Error updating user plans:', error);
//         throw error;
//     }
// };



import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getData = async () => await axios.get(`${API_URL}/getuser`);

export const postData = async (username, email, password, userRole) => {
    const { data: edata } = await getData();
    const newid = Math.max(...edata.map(user => user.id), 0) + 1;
    const ND = {
        uname: username,
        email: email,
        password: password,
        role: userRole,
        id: newid,
        plans: [] 
    };
    await axios.post(`${API_URL}/postuser`, ND);
};

export const showData = async () => {
    const res = await axios.get(`${API_URL}/getuser`);
    return res.data;
};

export const updateData = async (id, updatedUser) => {
    await axios.put(`${API_URL}/updateuser/${id}`, updatedUser);
};

export const deleteData = async (id) => {
    await axios.delete(`${API_URL}/deleteuser/${id}`);
};

export const getUserData = async (id) => {
    const res = await axios.get(`${API_URL}/getuser/${id}`);
    return res.data;
};

export const setNewUserPassword = async (id, updatedUser) => {
    await axios.put(`${API_URL}/updateuserpass/${id}`, updatedUser);
};

export const updateUserPlans = async (id, updatedPlans) => {
    try {
        const response = await axios.get(`${API_URL}/getuser/${id}`);
        const user = response.data;
        user.plans = updatedPlans;
        
        await axios.put(`${API_URL}/updateuser/${id}`, user);

        return user;
    } catch (error) {
        console.error('Error updating user plans:', error);
        throw error;
    }
};


//------------------------------------------------------------------------------

// export const getPlans = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/plans`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching plans:', error);
//       throw error;
//     }
//   };
  
//   export const addPlan = async (plan) => {
//     try {
//       const response = await axios.post(`${API_URL}/plans`, plan);
//       return response.data;
//     } catch (error) {
//       console.error('Error adding plan:', error);
//       throw error;
//     }
//   };
  
//   export const updatePlan = async (id, updatedPlan) => {
//     try {
//       const response = await axios.put(`${API_URL}/plans/${id}`, updatedPlan);
//       return response.data;
//     } catch (error) {
//       console.error('Error updating plan:', error);
//       throw error;
//     }
//   };
  
//   export const deletePlan = async (id) => {
//     try {
//       const response = await axios.delete(`${API_URL}/plans/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error deleting plan:', error);
//       throw error;
//     }
//   };

export const getPlans = async () => {
  try {
      const response = await axios.get(`${API_URL}/courses`);
      return response.data;
  } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
  }
};

export const addPlan = async (plan) => {
  try {
      const response = await axios.post(`${API_URL}/saveCourse`, plan);
      return response.data;
  } catch (error) {
      console.error('Error adding course:', error);
      throw error;
  }
};

export const updatePlan = async (id, updatedPlan) => {
  try {
      const response = await axios.put(`${API_URL}/updateCourse/${id}`, updatedPlan);
      return response.data;
  } catch (error) {
      console.error('Error updating course:', error);
      throw error;
  }
};

export const deletePlan = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}/courses/${id}`);
      return response.data;
  } catch (error) {
      console.error('Error deleting course:', error);
      throw error;
  }
};





//----------------------------------------------------------------------------------------------

// export const getInstitutions = async () => {
//     const response = await axios.get(`${API_URL}/institutions`);
//     return response.data;
// };

// export const getInstitutionPlans = async (institutionId) => {
//     const response = await axios.get(`${API_URL}/institutions/${institutionId}/plans`);
//     return response.data;
// };


// export const addInstitution = async (institution) => {
//     const response = await axios.post(`${API_URL}/institutions`, institution);
//     return response.data;
// };

// export const addInstitutionPlan = async (institutionId, plan) => {
//     const response = await axios.post(`${API_URL}/institutions/${institutionId}/plans`, plan);
//     return response.data;
// };

// export const updateInstitutionPlan = async (institutionId, planId, updatedPlan) => {
//     const response = await axios.put(`${API_URL}/institutions/${institutionId}/plans/${planId}`, updatedPlan);
//     return response.data;
// };

// export const deleteInstitutionPlan = async (institutionId, planId) => {
//     const response = await axios.delete(`${API_URL}/institutions/${institutionId}/plans/${planId}`);
//     return response.data;
// };

export const getInstitutions = async () => {
  try {
      const response = await axios.get(`${API_URL}/getins`);
      return response.data;
  } catch (error) {
      console.error('Error fetching institutions:', error);
      throw error;
  }
};

export const getInstitutionPlans = async (institutionId) => {
  try {
      const response = await axios.get(`${API_URL}/getins/${institutionId}/plans`);
      return response.data;
  } catch (error) {
      console.error('Error fetching institution plans:', error);
      throw error;
  }
};

export const addInstitution = async (institution) => {
  try {
      const response = await axios.post(`${API_URL}/postins`, institution);
      return response.data;
  } catch (error) {
      console.error('Error adding institution:', error);
      throw error;
  }
};
export const deleteInstitution = async (institutionid) => {
  try {
        await axios.delete(`${API_URL}/deleteins/${institutionid}`);
  } catch (error) {
      console.error('Error adding institution:', error);
      throw error;
  }
};

export const addInstitutionPlan = async (institutionId, plan) => {
  try {
      const response = await axios.post(`${API_URL}/getins/${institutionId}/plans`, plan);
      return response.data;
  } catch (error) {
      console.error('Error adding institution plan:', error);
      throw error;
  }
};


export const updateInstitutionPlan = async (institutionId, planId, updatedPlan) => {
  try {
      const response = await axios.put(`${API_URL}/getins/${institutionId}/plans/${planId}`, updatedPlan);
      return response.data;
  } catch (error) {
      console.error('Error updating institution plan:', error);
      throw error;
  }
};

export const deleteInstitutionPlan = async (institutionId, planId) => {
  try {
      const response = await axios.delete(`${API_URL}/getins/${institutionId}/plans/${planId}`);
      return response.data;
  } catch (error) {
      console.error('Error deleting institution plan:', error);
      throw error;
  }
};