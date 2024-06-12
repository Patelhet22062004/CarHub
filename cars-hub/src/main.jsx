import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Divider from './components/Divider/Divider.jsx';
import Footer from './components/Footer/Footer.jsx';
import { CartProvider } from 'react-use-cart';
import Scrollbutton from './components/Scrollbutton/Scrollbutton.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_public_key');

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CartProvider>
      <Elements stripe={stripePromise}>
      <Navbar />
        <App />
      </Elements>
      <Scrollbutton />
    </CartProvider>
  </>
);
