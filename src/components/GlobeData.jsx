// import React, { useEffect, useMemo, useState } from 'react'

// export const Context = React.createContext();

// const GlobeData = ({children}) => {

//     const [loggedIn,setLI] = useState(()=>{
//         const d = localStorage.getItem("LogIn");
//         return (d)?JSON.parse(d):false;
//     })


//     const Contexts = useMemo(()=>{
//         return{
//             loggedIn,
//             LogIn:()=>{setLI(true)},
//             LogOut:()=>{setLI(false)}
//         }
//     },[loggedIn])

//     useEffect(()=>{

//         localStorage.setItem("LogIn", JSON.stringify(loggedIn));

//     },[loggedIn])

//   return (
//     <Context.Provider value={Contexts}>
//         {children}
//     </Context.Provider>
//   )
// }

// export default GlobeData



// import React, { useMemo, useState } from 'react';

// export const Context = React.createContext();

// const GlobeData = ({ children }) => {
//     const [loggedIn, setLoggedIn] = useState(() => {
//         const data = localStorage.getItem("LogIn");
//         return data ? JSON.parse(data) : false;
//     });

//     const [userData, setUserData] = useState(() => {
//         const data = localStorage.getItem("userData");
//         return data ? JSON.parse(data) : null;
//     });

//     const [isAdmin, setIsAdmin] = useState(() => {
//         const data = localStorage.getItem("isAdmin");
//         return data ? JSON.parse(data) : false;
//     });

//     const Contexts = useMemo(() => {
//         return {
//             loggedIn,
//             userData,
//             isAdmin,
//             LogIn: (user) => {
//                 setLoggedIn(true);
//                 setUserData(user);
//                 setIsAdmin(user.Role === "Admin");
//                 localStorage.setItem("LogIn", JSON.stringify(true));
//                 localStorage.setItem("userData", JSON.stringify(user));
//                 localStorage.setItem("isAdmin", JSON.stringify(user.Role === "Admin"));
//             },
//             LogOut: () => {
//                 setLoggedIn(false);
//                 setUserData(null);
//                 setIsAdmin(false);
//                 localStorage.setItem("LogIn", JSON.stringify(false));
//                 localStorage.setItem("userData", JSON.stringify(null));
//                 localStorage.setItem("isAdmin", JSON.stringify(false));
//             }
//         };
//     }, [loggedIn, userData, isAdmin]);

//     return (
//         <Context.Provider value={Contexts}>
//             {children}
//         </Context.Provider>
//     );
// }

// export default GlobeData;


// import React, { useMemo, useState } from 'react';

// export const Context = React.createContext();

// const GlobeData = ({ children }) => {
//     const [loggedIn, setLoggedIn] = useState(() => {
//         const data = localStorage.getItem("LogIn");
//         return data ? JSON.parse(data) : false;
//     });

//     const [userData, setUserDataState] = useState(() => {
//         const data = localStorage.getItem("userData");
//         return data ? JSON.parse(data) : null;
//     });

//     const [isAdmin, setIsAdmin] = useState(() => {
//         const data = localStorage.getItem("isAdmin");
//         return data ? JSON.parse(data) : false;
//     });

//     const setUserData = (data) => {
//         setUserDataState(data);
//         localStorage.setItem("userData", JSON.stringify(data));
//     };

//     const Contexts = useMemo(() => {
//         return {
//             loggedIn,
//             userData,
//             isAdmin,
//             LogIn: (user) => {
//                 setLoggedIn(true);
//                 setUserData(user);
//                 setIsAdmin(user.Role === 'Admin');
//                 localStorage.setItem("LogIn", JSON.stringify(true));
//                 localStorage.setItem("isAdmin", JSON.stringify(user.Role === 'Admin'));
//             },
//             LogOut: () => {
//                 setLoggedIn(false);
//                 setUserData(null);
//                 setIsAdmin(false);
//                 localStorage.setItem("LogIn", JSON.stringify(false));
//                 localStorage.setItem("isAdmin", JSON.stringify(false));
//             },
//             setUserData,
//         };
//     }, [loggedIn, userData, isAdmin]);

    

//     return (
//         <Context.Provider value={Contexts}>
//             {children}
//         </Context.Provider>
//     );
// };

// export default GlobeData;

import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

export const Context = React.createContext();

const GlobeData = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(() => {
        const data = localStorage.getItem("LogIn");
        return data ? JSON.parse(data) : false;
    });

    const [userData, setUserData] = useState(() => {
        const data = localStorage.getItem("userData");
        return data ? JSON.parse(data) : null;
    });

    const [isAdmin, setIsAdmin] = useState(() => {
        const data = localStorage.getItem("isAdmin");
        return data ? JSON.parse(data) : false;
    });

    useEffect(() => {
        if (userData) {
            axios.get(`http://localhost:3001/users/${userData.id}`)
                .then(response => {
                    const user = response.data;
                    setUserData(user);
                    localStorage.setItem("userData", JSON.stringify(user));
                })
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [userData?.id]);

    const Contexts = useMemo(() => {
        return {
            loggedIn,
            userData,
            isAdmin,
            LogIn: (user) => {
                setLoggedIn(true);
                setUserData(user);
                setIsAdmin(user.Role === 'Admin');
                localStorage.setItem("LogIn", JSON.stringify(true));
                localStorage.setItem("userData", JSON.stringify(user));
                localStorage.setItem("isAdmin", JSON.stringify(user.Role === 'Admin'));
            },
            LogOut: () => {
                setLoggedIn(false);
                setUserData(null);
                setIsAdmin(false);
                localStorage.setItem("LogIn", JSON.stringify(false));
                localStorage.setItem("userData", JSON.stringify(null));
                localStorage.setItem("isAdmin", JSON.stringify(false));
            }
        };
    }, [loggedIn, userData, isAdmin]);

    return (
        <Context.Provider value={Contexts}>
            {children}
        </Context.Provider>
    );
}

export default GlobeData;


