import React from 'react';

const BooksTable = ({ books, isLoading }) => (
  <div className='mt-8 bg-white/10 bg-opacity-20 backdrop-blur-lg rounded-2xl border border-white border-opacity-30 shadow-lg overflow-hidden'>
    <div className='px-8 py-6 border-b border-white border-opacity-20'>
      <h2 className='text-2xl font-light text-white'>Book Collection</h2>
    </div>

    <div className='p-6 overflow-x-auto'>
      {isLoading ? (
        <div className='text-center py-4 text-white'>Loading books...</div>
      ) : books.length === 0 ? (
        <div className='text-center py-4 text-white text-opacity-80'>
          No books available
        </div>
      ) : (
        <table className='w-full'>
          <thead>
            <tr className='text-left border-b border-white border-opacity-20'>
              <th className='px-4 py-3 text-white font-light'>Title</th>
              <th className='px-4 py-3 text-white font-light'>Author</th>
              <th className='px-4 py-3 text-white font-light'>Genre</th>
              <th className='px-4 py-3 text-white font-light'>ISBN</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr
                key={book._id}
                className='border-b border-white border-opacity-10 hover:bg-white hover:bg-opacity-10'
              >
                <td className='px-4 py-3 text-white'>{book.title}</td>
                <td className='px-4 py-3 text-white'>{book.author}</td>
                <td className='px-4 py-3 text-white'>{book.genre}</td>
                <td className='px-4 py-3 text-white'>{book.isbn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);

export default BooksTable;
