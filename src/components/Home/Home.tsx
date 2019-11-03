import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Home.css';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <Row>
      <Col>
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          <Row>
            <Col>
              <Link className="btn btn-outline-primary btn-block" to="/signin">
                Sign in
              </Link>
            </Col>
            <Col>
              <Link className="btn btn-primary btn-block" to="/signup">
                Sign up
              </Link>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
