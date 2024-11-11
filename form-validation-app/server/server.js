require('dotnev').config();
const authRoutes = require('./routes/authRoutes');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));



  app.get('/', (req,res)=>{
    res.send('server is running');
  })

  app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
  })

  app.use('/api/auth', authRoutes);