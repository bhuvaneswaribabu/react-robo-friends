import React from 'react';
import {
  Card, Button, CardImg, CardTitle,
  CardSubtitle, CardBody, 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const CardTemplate = ({ name, email, id}) => {
    return(
          <Card style={{width: 300, height: 430, backgroundColor: '#009999'}}>
              <CardImg top   src={`https://robohash.org/${id}?100x100`} alt="robots" />
              <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardSubtitle>{email}</CardSubtitle>
                  <Button color="primary">Profile</Button>
            </CardBody>
          </Card>
    );
}

export default CardTemplate;