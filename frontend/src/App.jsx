import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import CreatePortfolio from './Pages/CreatePortfolio.jsx';
// import CreatePortfolio from './pages/CreatePortfolio.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/layout/Footer.jsx'; 
import Dashboard from './Pages/Dashboard.jsx'; 
import Login from './Pages/login.jsx';
import SignUp from './Pages/SignUp.jsx';
import ProfileContent from './dashboard/ProfileContent.jsx';

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-5 container ">
          <Routes>
            <Route className="bg-gradient-to-br from-blue-50 to-white" path="/" element={<Home />} />
            <Route path="/Portfolio/create" element={<CreatePortfolio />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profilecontent" element={<ProfileContent/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default App;