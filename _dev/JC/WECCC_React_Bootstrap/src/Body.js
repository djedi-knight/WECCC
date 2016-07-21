import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import LearnMore from './LearnMore';

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}> 
                    <Jumbotron>
                        <h3>Improving Value By Exploring Data!</h3>
                        <p> This tool has been developed by the ENCOMPASS Community Project.</p>
                        <p> It is an opportunity to allow home. community., long-term home providers and manogers, 
                        as well as community and reqional level professionals to explore and to understand the outcomes 
                        of their efforts on the populations they serve.</p>
                        <LearnMore />
                    </Jumbotron> 
                </Col>   
            </Row> 
        </Grid>
      
      </div>
    );
  }
}
