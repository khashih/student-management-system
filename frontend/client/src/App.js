
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/login';
import Register from '../src/components/registration';
import Tdashboard from './components/Tdashboard';
import Sdashboard from './components/Sdashboard';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student-dashboard" element={<Sdashboard />} />
          <Route path="/teacher-dashboard" element={<Tdashboard />} />
        </Routes>
      </Router>
      </div>
  )};
   

export default App;
