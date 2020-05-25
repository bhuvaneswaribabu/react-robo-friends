import React, { Component} from 'react';
import RoboCardList from '../components/RoboCardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class  App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
        console.log(this.state.robots)
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response =>{
                return response.json()
            })
            .then(users => this.setState({ robots: users}))
            console.log(this.state.robots)

    }
    onSearchChange=(event) =>{
        this.setState({ searchfield: event.target.value})
    }
    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        });
        return !robots.length? 
             <h1>Loading...</h1> :
            (
                
                <div style={{textAlign: "center"}}>
                    <h1 className="text-center">Robo friends</h1>
                    <SearchBox searchChange= {this.onSearchChange}/>
                    <Scroll>
                            <RoboCardList robots= { filteredRobots } />
                    </Scroll>
                </div>
            );
    };
}

export default App;