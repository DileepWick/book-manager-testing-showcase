import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/booksdb');
    console.log(`MongoDB Connected 😎`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
