import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
          navigate("/student-dashboard");
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (userType === 'Teacher') {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/teacher/register', { userId, password });
        if (response.data.success) {
          navigate("/teacher-dashboard");
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegistration}>
          <div className="flex justify-center mb-4 space-x-8">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Student"
                checked={userType === 'Student'}
                onChange={() => setUserType('Student')}
                className="form-radio text-indigo-600"
                required
              />
              <span className="font-medium">Student</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Teacher"
                checked={userType === 'Teacher'}
                onChange={() => setUserType('Teacher')}
                className="form-radio text-indigo-600"
                required
              />
              <span className="font-medium">Teacher</span>
            </label>
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              placeholder="Enter User ID"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
