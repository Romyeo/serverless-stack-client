import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

const NotFound: FC = () => {
  return (
    <Row>
      <Col>
        <div style={{ textAlign: 'center' }}>
          <h1>404 - Not found</h1>
          <h5>Uh oh! someone is snooping around</h5>
        </div>
      </Col>
    </Row>
  );
};

export default NotFound;
