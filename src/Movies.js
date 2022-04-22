import React from 'react';
import {Card} from 'react-bootstrap';
import Movie from './Movie';

class Movies extends React.Component
{
    render()
    {
        return (
            <>
            <Card>
                <Card.Body>
                    <Card.Title>
                        The Movie Theaters at {this.props.city}!
                    </Card.Title>
                    {this.props.theater.map((element, i) =>{
                        return(
                            <Movie
                                key={i}
                                name= {element.title}
                                overview= {element.overview}
                                average= {element.average_votes}
                                popularity= {element.popularity}
                                releasedate= {element.release_on}
                                img ={element.image_url}
                            />
                        );
                    })}
                </Card.Body>
            </Card>
            </>
        )
    }


}

export default Movies;