import React from 'react';
import { Container } from 'reactstrap';


const SearchBox = ({ searchfield, searchChange }) => {
    return(
            <div>
                <Container className="themed-container" fluid="sm">
                    <input 
                        type='search' 
                        placeholder='search robots' 
                        style={{backgroundColor: '#669999'}} 
                        onChange= { searchChange }
                    />
                </Container>
            </div>
    );
}

export default SearchBox;