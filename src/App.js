import './App.css';
 import Rating from './components/Rating';
import ThankYou from './components/ThankYou';
import { useState } from 'react';

export default function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);


  return (
    <div> 
      {showThankYouPage ? (<ThankYou rating={rating} />) : (
      <Rating rating={rating} 
      setRating={setRating}
      setShowThankYouPage={setShowThankYouPage} />)}
    </div>
  );
}


