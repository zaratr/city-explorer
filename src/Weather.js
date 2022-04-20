import React from 'react';
import {Card} from 'react-bootstrap';

class WeatherReporter extends React.Component
{
    render()
    {
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            La tiemp hoy por {this.props.city}

                        </Card.Title>
                        <Card.Title>
                            la tiempo hoy {this.props.forecast[0].valid_date} y {this.props.forecast[0].weather.description}
                        </Card.Title>
                        <Card.Title>
                            la tiempo hoy {this.props.forecast[1].valid_date} y {this.props.forecast[1].weather.description}
                        </Card.Title>
                        <Card.Title>
                            la tiempo hoy {this.props.forecast[2].valid_date} y {this.props.forecast[2].weather.description}
                        </Card.Title>
                    </Card.Body>
                </Card>
            
            </>
        )
    }
}

export default WeatherReporter;