import React from 'react';
import CardTemplate from './CardTemplate';

import {
     Container, Row, Col 
  } from 'reactstrap';

const divStyle = {
    marginTop: '10px',
};

const CardTemplateList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Col sm="3" style={divStyle}> 
                <CardTemplate  id={robots[i].id} name= {robots[i].name} email={robots[i].email}/> 
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

export default CardTemplateList;