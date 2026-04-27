/* eslint-disable unicode-bom */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import ApplyJob from './pages/ApplyJob';
import JobListings from './pages/JobListings';
import AppliedJob from './pages/AppliedJob';
import Contact from './pages/Contact';
import About from './pages/About';

import './App.css';

const initialJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Blue Owl Tech',
    location: 'Remote',
    type: 'Full-Time',
    salary: '₹35,000 - ₹50,000',
    description: 'Build modern web experiences using React, CSS, and API integrations.',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Nimbus Solutions',
    location: 'Bengaluru, India',
    type: 'Full-Time',
    salary: '₹45,000 - ₹65,000',
    description: 'Design scalable APIs and manage databases using Node.js or Python.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Pixel Fusion',
    location: 'Hyderabad, India',
    type: 'Contract',
    salary: '₹25,000 - ₹40,000',
    description: 'Create user-friendly interfaces and design systems for web and mobile apps.',
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Apex Labs',
    location: 'Chennai, India',
    type: 'Full-Time',
    salary: '₹55,000 - ₹80,000',
    description: 'Coordinate product delivery across engineering, design, and business teams.',
  },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobs] = useState(initialJobs);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
    const stored = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
    setAppliedJobs(stored);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  const handleApply = (job, applicant) => {
    const hasApplied = appliedJobs.some(
      (item) => item.id === job.id && item.applicant.email === applicant.email
    );

    if (hasApplied) {
      return false;
    }

    const next = [
      ...appliedJobs,
      {
        ...job,
        applicant,
        appliedAt: new Date().toLocaleString(),
      },
    ];

    setAppliedJobs(next);
    localStorage.setItem('appliedJobs', JSON.stringify(next));
    return true;
  };

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        appliedCount={appliedJobs.length}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/job-listings" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/job-listings" element={<JobListings jobs={jobs} />} />
        <Route path="/apply-job/:id" element={<ApplyJob jobs={jobs} onApply={handleApply} />} />
        <Route path="/applied-jobs" element={<AppliedJob appliedJobs={appliedJobs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/job-listings" />} />
      </Routes>
    </Router>
  );
}

export default App;
