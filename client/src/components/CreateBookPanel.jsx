import React from 'react';
import MessageAlert from './MessageAlert';
import BookForm from './BookForm';

const CreateBookPanel = ({
  message,
  formData,
  handleChange,
  handleSubmit,
  isLoading,
}) => (
  <div className='w-full bg-white/10 bg-opacity-20 backdrop-blur-lg rounded-2xl border border-white border-opacity-30 shadow-lg overflow-hidden'>
    <div className='px-8 py-6 border-b border-white border-opacity-20'>
      <h2 className='text-2xl font-light text-white'>Add New Book</h2>
    </div>

    <div className='p-8'>
      <MessageAlert message={message} />
      <BookForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  </div>
);

export default CreateBookPanel;
