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
                        {this.props.forecast.map((element, i) =>{
                            return (
                        <Card.Title key={i}>
                            la tiempo hoy {element.datetime} y {element.description}
                        </Card.Title>
                            )
                        })}
                    </Card.Body>
                </Card>
            
            </>
        )
    }
}

export default WeatherReporter;