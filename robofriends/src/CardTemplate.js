import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const CardTemplate = ({ name, email, id}) => {
    return(
          <Card style={{width: 250, height: 450, backgroundColor: 'powderblue'}}>
              <CardImg top width="100%"   src={`https://robohash.org/${id}?100x100`} alt="robots" />
              <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardSubtitle>{email}</CardSubtitle>
                  <CardText>This is a wider card with supporting </CardText>
                  <Button color="primary">Profile</Button>
            </CardBody>
          </Card>
    );
}

export default CardTemplate;