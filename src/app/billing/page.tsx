// src/components/BillingPage.tsx

import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

// Define interfaces
interface Plan {
  id: string;
  name: string;
  price: number;
}

interface Customer {
  id: string;
  email: string;
  plans: Plan[];
}

interface BillingPageProps {}

// BillingPage component
const BillingPage: React.FC<BillingPageProps> = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string);
  const stripe = useStripe();
  const elements = useElements();
  const customer = useSelector((state: any) => state.customer) as Customer;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement as any,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Payment Method:', paymentMethod);
    }
  };

  return (
    <div>
      <h1>Billing Page</h1>
      <p>Customer Email: {customer.email}</p>
      <p>Plans:</p>
      <ul>
        {customer.plans.map((plan: Plan) => (
          <li key={plan.id}>{plan.name} - ${plan.price}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <a href={`https://billing.stripe.com/p/portal/${customer.id}`}>Customer Portal</a>
    </div>
  );
};

export default BillingPage;