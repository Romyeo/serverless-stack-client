import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Home.css';

const Home: FC = () => {
  return (
    <Row>
      <Col>
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
