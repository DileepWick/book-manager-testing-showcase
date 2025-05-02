import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCreationApp from '../components/BookCreationApp';

const Home = () => {
  return (
    <div
      className='min-h-screen flex flex-col poppins-regular'
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dpdrfruja/image/upload/v1746176342/galen-crout-zHgyrDmhGVo-unsplash_zlqozv.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <BookCreationApp />
      <Footer />
    </div>
  );
};

export default Home;
