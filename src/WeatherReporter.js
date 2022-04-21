import React from 'react';
import {Card} from 'react-bootstrap';
import WeatherDay from './WeatherDay'

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
                                <WeatherDay 
                                key = {i}
                                datetime = {element.datetime}
                                description ={element.description}
                                />

                            )
                        })}
                    </Card.Body>
                </Card>
            
            </>
        )
    }
}

export default WeatherReporter;