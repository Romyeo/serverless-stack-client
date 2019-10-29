import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Alert, Row, Col } from 'react-bootstrap';

import * as authActions from 'store/actions/auth';

import * as authSelectors from 'selectors/auth';

import useFormFields from 'hooks/formFields';

const Signin = ({ history }) => {
  const { push } = history;

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.selectAuthCheckedError);
  const signingIn = useSelector(authSelectors.selectAuthSigningIn);
  const signedIn = useSelector(authSelectors.selectAuthSignedIn);

  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: ''
  });
  const { password, email } = fields;

  useEffect(() => {
    if (signedIn) push('/');
  }, [signedIn, push]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authActions.signInAuth(email, password));
  };

  return (
    <Row className="justify-content-md-center">
      <Col lg="5">
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group controlId="formBasicEmail">
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

          <Form.Group controlId="formBasicPassword">
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
