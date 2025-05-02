import { Book } from '../models/Book.js';

export const createBook = async (req, res) => {
  try {
    const { title, author, genre, isbn } = req.body;

    if (!title || !author || !genre || !isbn) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
      return res.status(409).json({ message: 'Book with this ISBN already exists' });
    }

    const book = new Book({ title, author, genre, isbn });
    await book.save();

    res.status(201).json(book);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
