// import { Route, Routes } from "react-router-dom";
// import Login from "./components/Login.jsx";
// import Signup from "./components/Signup.jsx";
// // import Navbar from "./components/Navbar.jsx";
// import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
// import Plans from "./components/Plans.jsx";
// import ContactUs from "./components/ContactUs.jsx";
// import AdminUsers from "./components/AdminUsers.jsx";
// import Admissions from "./components/Admissions.jsx";
// import Profile from "./components/Profile.jsx";
// import Institutions from "./components/Institutions.jsx";
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" exact element={<Home />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/Signup" element={<Signup />}></Route>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/contact" element={<ContactUs />}></Route>
//         <Route path="/plans" element={<Plans />}></Route>
//         <Route path="/adminusers" element={<AdminUsers />}></Route>
//         <Route path="/admissions" element={<Admissions />}></Route>
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/institutions" element={<Institutions />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Plans from "./components/Plans.jsx";
import ContactUs from "./components/ContactUs.jsx";
import AdminUsers from "./components/AdminUsers.jsx";
import Admissions from "./components/Admissions.jsx";
import Profile from "./components/Profile.jsx";
import Institutions from "./components/Institutions.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Payment from "./components/Payment.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/plans" element={
          <ProtectedRoute>
            <Plans />
          </ProtectedRoute>
        }></Route>
        <Route path="/payment" element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }></Route>
        <Route path="/adminusers" element={
          <ProtectedRoute adminOnly={true}>
            <AdminUsers />
          </ProtectedRoute>
        }></Route>
        <Route path="/admissions" element={
          <ProtectedRoute>
            <Admissions />
          </ProtectedRoute>
        }></Route>
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }></Route>
        <Route path="/institutions" element={
          <ProtectedRoute adminOnly={true}>
            <Institutions />
          </ProtectedRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
