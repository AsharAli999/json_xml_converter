import React from 'react';
import Header from './Header';
import Conversion from './Conversion';
import Gallery from './Gallery';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className=''>
      <Header />
      <Conversion />
      <Gallery />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
