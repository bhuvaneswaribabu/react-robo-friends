import React from 'react';
import { robots } from './robots';
import RoboCard from './RoboCard';

import {
     Container, Row, Col 
  } from 'reactstrap';

const divStyle = {
    marginTop: '10px',
};

const CardList = () => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Col sm="3" style={divStyle}> 
                <RoboCard  id={robots[i].id} name= {robots[i].name} email={robots[i].email}/> 
            </Col>
        )
    })
    return (
      <Container fluid>
        <Row> 
                { cardComponent }
        </Row> 
      </Container>

    );
}

export default CardList;