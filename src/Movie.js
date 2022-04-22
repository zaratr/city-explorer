import React from 'react';
import {Card} from 'react-bootstrap';

class Movie extends React.Component{
    render()
    {
        return(
            <>
            <Card.Title key={this.props.key}>
                Movie name: {this.props.name}
                Movie Overview: {this.props.overview}
                Movie Average Votes: {this.props.average}
                {/* Movie image: {this.props.image_url} */}
                Movie popularity: {this.props.popularity}
                Movie release date: {this.props.releasedate}

            </Card.Title>
            <Card.Img src={this.props.img}></Card.Img> 
            </>
        )
    }
}
export default Movie;