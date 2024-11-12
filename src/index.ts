import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import { scheduleCronJobs } from './crons/subscripStatus';

dotenv.config();

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nlpzidc.mongodb.net/${process.env.DB_NAME}`)
  .then(() => {
    console.log('Connected to MongoDB');
    scheduleCronJobs(); // Starts the cron jobs after DB connection
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('DB connection error:', error));
