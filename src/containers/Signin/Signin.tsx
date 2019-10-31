import React, { useEffect, FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Button, Form, Alert, Row, Col } from 'react-bootstrap';

import * as authActions from 'store/actions/auth';

import * as authSelectors from 'selectors/auth';

import useFormFields from 'hooks/formFields';

interface IFormState {
  email: string;
  password: string;
}

const Signin: FC<RouteComponentProps> = ({ history }) => {
  const { push } = history;

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.selectAuthSignedInError);
  const signingIn = useSelector(authSelectors.selectAuthSigningIn);
  const signedIn = useSelector(authSelectors.selectAuthSignedIn);

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
    dispatch(authActions.signInAuth(email, password));
  };

  return (
    <Row className="justify-content-md-center">
      <Col lg="5">
        <Form onSubmit={handleSubmit}>
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
