import React from 'react';
import {Card} from 'react-bootstrap';

class WeatherDay extends React.Component{
    render()
    {
        return(
            <>
                <Card.Title key={this.props.key}>
                    la tiempo hoy {this.props.datetime} y {this.props.description}
                </Card.Title>

            </>
        )
    }
}

export default WeatherDay;