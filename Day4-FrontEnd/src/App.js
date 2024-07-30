import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
// import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Plans from "./components/Plans.jsx";
import ContactUs from "./components/ContactUs.jsx";
import AdminUsers from "./components/AdminUsers.jsx";
import Admissions from "./components/Admissions.jsx";
import Profile from "./components/Profile.jsx";
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
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/adminusers" element={<AdminUsers />}></Route>
        <Route path="/admissions" element={<Admissions />}></Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
