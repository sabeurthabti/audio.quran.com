import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
const styles = require('./style.scss');
export default () => (
  <Grid className={styles.header} fluid>
    <Row>
      <Col md={8} mdOffset={2} className={`text-center ${styles.header__text}`}>
        <h1 className={styles.heading}>QuranicAudio</h1>
      </Col>
    </Row>
  </Grid>
);
