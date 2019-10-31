import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import * as authActions from 'store/actions/auth';
import * as authSelectors from 'selectors/auth';

const Signout: FC<RouteComponentProps> = ({ history }) => {
  const { push } = history;

  const dispatch = useDispatch();
  const signedIn = useSelector(authSelectors.selectAuthSignedIn);

  useEffect(() => {
    dispatch(authActions.signOutAuth());
  }, [dispatch]);

  useEffect(() => {
    if (!signedIn) push('/signin');
  }, [signedIn, push]);

  return (
    <Row>
      <Col>
        <div style={{ textAlign: 'center' }}>
          <h3>Come back writing down soon</h3>
          <p>Signing out...</p>
        </div>
      </Col>
    </Row>
  );
};

export default Signout;
