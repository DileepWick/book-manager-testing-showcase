import express from 'express';
import { createBook } from '../controllers/bookController.js';

const router = express.Router();

// Route to create a book
router.post('/books', createBook);

export default router;
