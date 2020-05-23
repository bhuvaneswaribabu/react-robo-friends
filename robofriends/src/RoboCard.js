import React from 'react';
import ReactCardFlip from 'react-card-flip';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class RoboCard extends React.Component {
    constructor(props) {
      super();
        this.state = {
        isFlipped: false
        
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    render () {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div >
                    <Card style={{width: 250, height: 450, backgroundColor: 'powderblue'}}>
                        <CardImg top width="100%"   src={`https://robohash.org/${this.props.id}?100x100`} alt="robots" />
                        <CardBody>
                            <CardTitle>{this.props.name} </CardTitle>
                            <CardSubtitle>{this.props.email}</CardSubtitle>
                            <CardText>This is a about the King </CardText>
                            <Button onClick={this.handleClick} color="primary">Profile view</Button>
                        </CardBody>
                    </Card>
                </div>
                <div >
                    <Card style={{width: 250, height: 450, backgroundColor: 'powderblue'}}>
                        <CardBody>
                            <CardTitle>King of Chozha dynasty in 14th century </CardTitle>
                            <CardSubtitle>Built Thanjai Periya Koil</CardSubtitle>
                            <CardText>Great warroir </CardText>
                            <Button onClick={this.handleClick} color="primary">Picture</Button>
                        </CardBody>
                    </Card>
                </div>
        </ReactCardFlip>
      )
    }
  }

  export default RoboCard;
