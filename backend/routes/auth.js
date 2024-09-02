const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const student = require('../models/student');


router.post('/teacher/register', async (req, res) => {
  try {
    console.log(req.body);
    const { userId, password } = req.body;
    const Teachers = await Teacher.findOne({ userId });
    if (Teachers) {
      return res.status(200).json({ message: 'User already exists.', success: false });
    }
    const newteacher = new Teacher({ userId, password });
    await newteacher.save()
    res.status(201).json({ message: 'User created successfully', success: true });

  } catch (error) {
    res.status(500).json({ message: error, success: false });
  }
});
router.post('/student/register', async (req, res) => {
  try {
   
    const { userId, password } = req.body;
    const students = await student.findOne({ userId });
    if (students) {
      return res.status(200).json({ message: 'User already exists.', success: false });
    }
    const newStudent  = new student({ userId, password });
    await newStudent.save()
    res.status(201).json({ message: 'User created successfully', success: true });

  } catch (error) {
    res.status(500).json({ message: error, success: false });
  }




  
  // Registration logic
});


router.post('/login/student', async (req, res) => {
  const { userId, password } = req.body;

  try {
    // Check if the user exists
    const user = await student.findOne({ userId });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // If the email and password match, login is successful
    res.status(200).json({ message: 'Login successful' , success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



router.post('/login/teacher', async (req, res) => {
  const { userId, password } = req.body;

  try {
    // Check if the user exists
    const user = await Teacher.findOne({ userId });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // If the email and password match, login is successful
    res.status(200).json({ message: 'Login successful' ,success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
