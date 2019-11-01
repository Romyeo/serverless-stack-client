import React, { FC, useEffect, useState, FormEvent, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Alert, Button, Col, Form, ProgressBar, Row } from 'react-bootstrap';
import zxcvbn from 'zxcvbn';

import { activateAuth, signInAuth, signUpAuth } from 'store/actions/auth';

import {
  selectAuthActivated,
  selectAuthActivatedError,
  selectAuthActivating,
  selectAuthSignedIn,
  selectAuthSignedInError,
  selectAuthSignedUp,
  selectAuthSignedUpError,
  selectAuthSigningIn,
  selectAuthSigningUp
} from 'selectors/auth';

import useFormFields from 'hooks/formFields';

import './Signup.css';

interface IFormState {
  email: string;
  password: string;
  confirmPassword: string;
  code: string;
}

const Signup: FC<RouteComponentProps> = ({ history }) => {
  const { push } = history;

  const dispatch = useDispatch();

  const activated = useSelector(selectAuthActivated);
  const activatedError = useSelector(selectAuthActivatedError);
  const activating = useSelector(selectAuthActivating);

  const signedIn = useSelector(selectAuthSignedIn);
  const signedInError = useSelector(selectAuthSignedInError);
  const signingIn = useSelector(selectAuthSigningIn);

  const signedUp = useSelector(selectAuthSignedUp);
  const signedUpError = useSelector(selectAuthSignedUpError);
  const signingUp = useSelector(selectAuthSigningUp);

  const [passStr, setPassStr] = useState(0);
  const [error, setError] = useState('');

  const [fields, handleFieldChange] = useFormFields<IFormState>({
    email: '',
    password: '',
    confirmPassword: '',
    code: ''
  });

  const { email, password, confirmPassword, code } = fields;

  useEffect(() => {
    setPassStr(zxcvbn(password).score);
  }, [password]);

  useEffect(() => {
    if (signedIn) push('/');
  }, [signedIn, push]);

  const handleSignUpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    let error = '';

    if (password !== confirmPassword)
      error = 'Re-entered password does not match the given password';

    if (passStr <= 2) error = 'The given password is too weak';

    if (error) {
      setError(error);
      return;
    }

    dispatch(signUpAuth(email, password));
  };

  const handleActivateSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    dispatch(activateAuth(email, code));
  };

  const handleSignInClick = () => {
    setError('');
    dispatch(signInAuth(email, password));
  };

  const renderSignUp = (
    <Form onSubmit={handleSignUpSubmit}>
      {(error || signedUpError) && !signingUp && !signedUp && (
        <Alert variant="danger">{error || signedUpError}</Alert>
      )}

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
        <ProgressBar min={0} max={4} now={passStr} />
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleFieldChange}
          placeholder="Re-enter your password for confirmation"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={signingUp} block>
        {signingUp ? 'Signing up...' : 'Sign up'}
      </Button>
    </Form>
  );

  const renderConfirmation = (
    <Form onSubmit={handleActivateSubmit}>
      {(error || activatedError) && !activating && !activated && (
        <Alert variant="danger">{error || activatedError}</Alert>
      )}

      <Form.Group controlId="code">
        <Form.Label>Activation code</Form.Label>
        <Form.Control
          name="code"
          type="text"
          value={code}
          onChange={handleFieldChange}
          placeholder="Enter your activation code"
          required
        />
        <Form.Text>
          Please check your email for the code that we have sent.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={activating} block>
        {activating ? 'Activating...' : 'Activate'}
      </Button>
    </Form>
  );

  const renderSignIn = (
    <Fragment>
      {(error || signedInError) && !signingIn && !signedIn && (
        <Alert variant="danger">{error || signedInError}</Alert>
      )}
      <Alert variant="primary">
        Your account has been successfully activated. Click "Sign in" to
        continue automatically
      </Alert>
      <Button
        variant="primary"
        disabled={signingIn}
        onClick={handleSignInClick}
        block
      >
        {signingIn ? 'Signing in...' : 'Sign in'}
      </Button>
    </Fragment>
  );

  return (
    <Row className="justify-content-center">
      <Col lg="5">
        {!signedUp
          ? signingIn
            ? renderSignIn
            : renderSignUp
          : activated
          ? renderSignIn
          : renderConfirmation}
      </Col>
    </Row>
  );
};

export default Signup;
