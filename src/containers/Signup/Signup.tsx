import React, {
  FC,
  useEffect,
  useState,
  FormEvent,
  Fragment,
  MouseEvent
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Alert, Button, Col, Form, ProgressBar, Row } from 'react-bootstrap';
import zxcvbn from 'zxcvbn';

import { activateAuth, signInAuth, signUpAuth } from 'store/actions/auth';

import * as authSelectors from 'selectors/auth';

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

  const activated = useSelector(authSelectors.selectAuthActivated);
  const activatedError = useSelector(authSelectors.selectAuthActivatedError);
  const activating = useSelector(authSelectors.selectAuthActivating);

  const signedIn = useSelector(authSelectors.selectAuthSignedIn);
  const signedInError = useSelector(authSelectors.selectAuthSignedInError);
  const signingIn = useSelector(authSelectors.selectAuthSigningIn);

  const signedUp = useSelector(authSelectors.selectAuthSignedUp);
  const signedUpError = useSelector(authSelectors.selectAuthSignedUpError);
  const signingUp = useSelector(authSelectors.selectAuthSigningUp);

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

    let error = '';

    if (password !== confirmPassword)
      error = 'Re-entered password does not match the given password';

    if (passStr <= 2) error = 'The given password is too weak';

    if (error) {
      setError(error);
      return;
    }

    dispatch(signUpAuth(email, password));
    setError('');
  };

  const handleActivateSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(activateAuth(email, code));
    setError('');
  };

  const handleSignInClick = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(signInAuth(email, password));
    setError('');
  };

  const renderSignUp = (
    <Form onSubmit={handleSignUpSubmit}>
      {(error || signedUpError) && !signingUp && !signedUp && (
        <Alert variant="danger">{error || signedUpError}</Alert>
      )}

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
        <ProgressBar min={0} max={4} now={passStr} />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
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

      <Form.Group controlId="formBasicCode">
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
    <Row className="justify-content-md-center">
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
