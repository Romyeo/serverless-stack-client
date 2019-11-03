import React, { FC, FormEvent, useState } from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import {
  injectStripe,
  CardElement,
  ReactStripeElements
} from 'react-stripe-elements';

import useFormFields from 'hooks/formFields';
import { useDispatch, useSelector } from 'react-redux';
import { selectBillSaving, selectBillError } from 'selectors/bill';
import { saveBill } from 'store/actions/bill';

const BillingForm: FC<ReactStripeElements.InjectedStripeProps> = props => {
  const dispatch = useDispatch();

  const errorBill = useSelector(selectBillError);
  const savingBill = useSelector(selectBillSaving);

  const [card, setCard] = useState({ complete: false, error: '' });
  const [validated, setValidated] = useState(false);

  const [fields, handleFieldChange] = useFormFields({
    storage: '',
    name: ''
  });

  const { name, storage } = fields;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity() || !card.complete) {
      if (!validated) setValidated(true);
      if (!card.complete) {
        setCard({
          ...card,
          error: card.error || 'Please provide a valid card details'
        });
      }

      return;
    }

    const numStorage = Number(storage);

    if (isNaN(numStorage)) return;
    if (!props.stripe) return;

    dispatch(saveBill(numStorage, name, props.stripe));

    // console.log(props, token, error);
  };

  const handleElementChange = (
    event: ReactStripeElements.ElementChangeResponse
  ) => {
    const { error, complete } = event;

    if (error && error.message) {
      setCard({
        complete,
        error: error.message
      });
      return;
    }

    if (!complete && validated) {
      setCard({
        complete,
        error: 'Please provide a valid card details'
      });
      return;
    }

    setCard({ error: '', complete: true });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {errorBill && <Alert variant="danger">{errorBill}</Alert>}
      <Form.Group controlId="storage">
        <Form.Label>Storage</Form.Label>
        <Form.Control
          type="number"
          name="storage"
          placeholder="Number of scratch notes you could store"
          value={storage}
          onChange={handleFieldChange}
          disabled={savingBill}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid number of storage.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="name">
        <Form.Label>Card holder name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Name registered on the card"
          value={name}
          onChange={handleFieldChange}
          disabled={savingBill}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid card holder name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Card details</Form.Label>
        <div
          className={`stripe-element-container ${validated &&
            'validated'} ${!card.complete && 'incomplete'}`}
        >
          <CardElement
            disabled={savingBill}
            onChange={handleElementChange}
            style={{
              base: {
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '16px',
                lineHeight: '23px',
                fontWeight: '400'
              },
              empty: {
                color: 'rgba(0, 0, 0, 0.9)'
              }
            }}
            className="form-control"
          />
        </div>
        {card.error && (
          <Form.Text style={{ color: '#dc3545' }}>{card.error}</Form.Text>
        )}
      </Form.Group>

      <Button type="submit" block disabled={savingBill}>
        {savingBill ? 'Purchasing...' : 'Purchase'}
      </Button>
    </Form>
  );
};

export default injectStripe(BillingForm);
