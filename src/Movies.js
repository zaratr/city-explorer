import React from 'react';
import {Card} from 'react-bootstrap';

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
                            <Card.Title key={i}>
                                Movie name: {element.title}
                                Movie Overview: {element.overview}
                                Movie Average Votes: {element.average_votes}
                                Movie image: {element.image_url}
                                Movie popularity: {element.popularity}
                                Movie release date: {element.release_on}
                            {/* <Card.Img src={element.image_url}></Card.Img> */}
                            </Card.Title>
                        )
                    })}
                </Card.Body>
            </Card>
            </>
        )
    }


}

export default Movies;