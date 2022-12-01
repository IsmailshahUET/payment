import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51L1SAQGDqg8YJV6UOs6uIGrgsMK1T2CNVjZSBjRyNw9Tdcwm2rDd5kbXAKpyRTY7QyrgvAmfkRRrQ5uYRHqDxA6c00sL9L8lx6"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
