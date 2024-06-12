// backend/routes/payment.js

const express = require('express');
const router = express.Router();
const stripe = require('stripe')('your_stripe_secret_key');
const { CartItem } = require('../models'); // Assuming you have a CartItem model

// Route to create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  const { cartItems } = req.body;
  
  try {
    // Calculate total amount from cart items
    const amount = cartItems.reduce((total, item) => total + item.price, 0) * 100; // Convert to cents

    // Create a PaymentIntent with the calculated amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'Rs', // Change to your preferred currency
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).json({ error: 'Failed to create PaymentIntent.' });
  }
});

module.exports = router;
