import React, { FC } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';

import config from 'config';

import BillingForm from './BillingForm';

import './Billing.css';

const Billing: FC = () => {
  return (
    <StripeProvider apiKey={config.stripe.STRIPE_KEY}>
      <Elements
        fonts={[
          {
            cssSrc:
              'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800'
          }
        ]}
      >
        <BillingForm />
      </Elements>
    </StripeProvider>
  );
};

export default Billing;
