import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running : http://localhost:${PORT} 😊`));
