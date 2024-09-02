import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(''); // Manage the selected user type
  const [userId, setUserId] = useState(''); // Handle the user ID input
  const [password, setPassword] = useState(''); // Handle the password input

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userType === 'Student') {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login/student', { userId, password });
        if (response.data.success) {
          navigate('/student-dashboard');
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (userType === 'Teacher') {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login/teacher', { userId, password });
        if (response.data.success) {
          navigate('/teacher-dashboard');
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
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
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <a href="/register" className="text-indigo-600 hover:underline">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
