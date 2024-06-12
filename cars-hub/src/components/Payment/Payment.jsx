import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_public_key');

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const cartItems = location.state ? location.state.cartItems : [];

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await axios.post('/payment/create-payment-intent', { cartItems });
        setClientSecret(response.data.client_secret);
      } catch (error) {
        console.error('Error fetching PaymentIntent:', error);
        setError('Failed to fetch PaymentIntent.');
      }
    };

    fetchPaymentIntent();
  }, [cartItems]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setError('Payment gateway is not available. Please try again later.');
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        console.error('Error confirming payment:', error);
        setError(error.message || 'Failed to confirm payment.');
        setProcessing(false);
        return;
      }

      // Payment successful, navigate to the ticket page
      navigate('/ticketpage', { state: { cartItems } });
    } catch (error) {
      console.error('Error processing payment:', error);
      setError(error.message || 'Failed to process payment.');
      setProcessing(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 bg-white mt-5 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="border border-gray-300 rounded-md p-4">
                <label className="block mb-1 font-medium">Card Details</label>
                <CardElement options={{}} />
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <button 
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md inline-block disabled:bg-gray-400 disabled:pointer-events-none"
                disabled={processing}
              >
                {processing ? 'Processing...' : 'Pay Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const PaymentWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default PaymentWrapper;
