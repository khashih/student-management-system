const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

// mongoose.connect('mongodb://localhost:27017/student-management-system', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.once('open', () => {
// console.log('Connected to MongoDB');
// });
mongoose.connect('mongodb+srv://mohammedkhashih:o22xjF4MMXJKBYxf@cluster0.z4w96.mongodb.net/student-management-system?retryWrites=true&w=majority', {
    // No need to include useNewUrlParser and useUnifiedTopology
  });
  
  const db = mongoose.connection;
  
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});