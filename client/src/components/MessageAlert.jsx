import React from 'react';

const MessageAlert = ({ message }) => {
  if (!message.text) return null;

  return (
    <div
      className={`mb-6 px-4 py-3 rounded-lg backdrop-blur-md ${
        message.isError
          ? 'bg-red-500 bg-opacity-20 text-red-100 border border-red-200 border-opacity-30'
          : 'bg-green-500 bg-opacity-20 text-green-100 border border-green-200 border-opacity-30'
      }`}
    >
      {message.text}
    </div>
  );
};

export default MessageAlert;
