import React, { useState, useEffect, FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Button, Form, Alert, Row, Col } from 'react-bootstrap';

import { signInAuth } from 'store/actions/auth';

import {
  selectAuthSignedInError,
  selectAuthSigningIn,
  selectAuthSignedIn
} from 'selectors/auth';

import useFormFields from 'hooks/formFields';

interface IFormState {
  email: string;
  password: string;
}

const Signin: FC<RouteComponentProps> = ({ history }) => {
  const { push } = history;

  const dispatch = useDispatch();
  const error = useSelector(selectAuthSignedInError);
  const signingIn = useSelector(selectAuthSigningIn);
  const signedIn = useSelector(selectAuthSignedIn);

  const [validated, setValidated] = useState(false);

  const [fields, handleFieldChange] = useFormFields<IFormState>({
    email: '',
    password: ''
  });

  const { password, email } = fields;

  useEffect(() => {
    if (signedIn) push('/');
  }, [signedIn, push]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validated) setValidated(true);

    if (!event.currentTarget.checkValidity()) return;

    dispatch(signInAuth(email, password));
  };

  return (
    <Row className="justify-content-center">
      <Col lg="5">
        <Form validated={validated} onSubmit={handleSubmit} noValidate>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={email}
              onChange={handleFieldChange}
              placeholder="Enter your email address"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide your valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={password}
              onChange={handleFieldChange}
              placeholder="Enter your password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide your valid password.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" disabled={signingIn} block>
            {signingIn ? 'Signing in...' : 'Sign in'}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Signin;
