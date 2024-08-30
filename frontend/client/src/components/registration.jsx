import React, { useState } from 'react';
import axios from 'axios';
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [userType, setUserType] = useState(''); // Manage the selected user type
  const [userId, setUserId] = useState(''); // Handle the user ID input
  const [password, setPassword] = useState(''); // Handle the password input
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleRegistration = async (e) => {
    e.preventDefault();

    if (userType === 'Student') {
      
      try {
        const response = await axios.post('http://localhost:5000/api/auth/student/register', { userId, password });
        if (response.data.success) {
          navigate("student-dashboard")
        } else {
          alert("not successful")
          setError(response.data.message)
        }
      } catch (error) {
        console.log(error);


      }



    }


    else if (userType === 'Teacher') {

      try {
        const response = await axios.post('http://localhost:5000/api/auth/teacher/register', { userId, password });
        if (response.data.success) {
          navigate("teacher-dashboard")
        } else {
          alert("not successful")

        }
      } catch (error) {
        console.log(error);


      }


    }

  };

  return (
    <div className="container">
      <div className="login">
        <h2>REGISTER</h2>
        <form onSubmit={handleRegistration}>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Student"
                checked={userType === 'Student'}
                onChange={() => setUserType('Student')}
                required
              />
              <span>Student</span>
            </label>
            <label>
              <input
                type="radio"
                value="Teacher"
                checked={userType === 'Teacher'}
                onChange={() => setUserType('Teacher')}
                required
              />
              <span>Teacher</span>
            </label>
          </div>

          <div>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              placeholder="Enter User ID"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
