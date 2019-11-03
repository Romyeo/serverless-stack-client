import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Billing from 'containers/Billing/Billing';

const Settings = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={7}>
        <Billing />
      </Col>
    </Row>
  );
};

export default Settings;
