import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import CreatePortfolio from './pages/CreatePortfolio.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/layout/Footer.jsx';  

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-5 container ">
          <Routes>
            <Route className="bg-gradient-to-br from-blue-50 to-white" path="/" element={<Home />} />
            <Route path="/Portfolio/create" element={<CreatePortfolio />} />
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;