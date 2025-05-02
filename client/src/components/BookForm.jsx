import React from 'react';

const BookForm = ({ formData, handleChange, handleSubmit, isLoading }) => (
  <div className='space-y-6'>
    <div>
      <label className='block text-white text-opacity-90 font-light mb-2'>
        Title
      </label>
      <input
        type='text'
        name='title'
        value={formData.title}
        onChange={handleChange}
        className='w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-black placeholder-black/50 placeholder- focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 backdrop-blur-md'
        placeholder='Enter book title'
      />
    </div>

    <div>
      <label className='block text-white text-opacity-90 font-light mb-2'>
        Author
      </label>
      <input
        type='text'
        name='author'
        value={formData.author}
        onChange={handleChange}
        className='w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-black placeholder-black/50 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 backdrop-blur-md'
        placeholder='Enter author name'
      />
    </div>

    <div>
      <label className='block text-white text-opacity-90 font-light mb-2'>
        Genre
      </label>
      <select
        name='genre'
        value={formData.genre}
        onChange={handleChange}
        className='w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-black/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 backdrop-blur-md appearance-none'
      >
        <option value='Fiction' className='bg-stone-100'>
          Fiction
        </option>
        <option value='Non-Fiction' className='bg-stone-100'>
          Non-Fiction
        </option>
        <option value='Science Fiction' className='bg-stone-100'>
          Science Fiction
        </option>
        <option value='Fantasy' className='bg-stone-100'>
          Fantasy
        </option>
        <option value='Mystery' className='bg-stone-100'>
          Mystery
        </option>
        <option value='Thriller' className='bg-stone-100'>
          Thriller
        </option>
        <option value='Romance' className='bg-stone-100'>
          Romance
        </option>
        <option value='Biography' className='bg-stone-100'>
          Biography
        </option>
      </select>
    </div>

    <div>
      <label className='block text-white text-opacity-90 font-light mb-2'>
        ISBN
      </label>
      <input
        type='text'
        name='isbn'
        value={formData.isbn}
        onChange={handleChange}
        className='w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-black placeholder-black/50 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 backdrop-blur-md'
        placeholder='Enter ISBN'
      />
    </div>

    <div className='pt-4'>
      <button
        onClick={handleSubmit}
        className='w-full px-6 py-3 bg-black/60 bg-opacity-20 hover:bg-opacity-30 text-white font-light rounded-lg transition-all duration-500 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 border border-black border-opacity-20 hover:bg-black cursor-pointer'
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Add Book'}
      </button>
    </div>
  </div>
);

export default BookForm;
