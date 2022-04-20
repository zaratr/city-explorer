import React from 'react';
import {Card} from 'react-bootstrap'


class Location extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            map : ''
        };
    }


    render()
    {
        this.setState({
            map : `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.long}&zoom=10`
                        }, () => console.log(this.state.map))
                
        return(
            <Card id='locationCard' style={{width:'24rem'}}>
                <Card.Body>
                    <Card.Title id='locTitle'>{this.props.city}</Card.Title>
                    <Card.Text className='locText'>
                        The lat is: {this.props.lat}
                    </Card.Text>
                    <Card.Text className='locText'>
                        The long is: {this.props.long}
                    </Card.Text>
                    <Card.Img in='locImg' variant='top' src={this.state.map} />
                </Card.Body>

            </Card>
        );
    }
}

export default Location;