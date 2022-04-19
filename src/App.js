import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import Location from './Location';
//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      data: {},//receives from child - empty for now
      location: '',
      lat: null,
      lon: null,
      errorMessage: '',
      modalDtaState: false

    };
  }

    handleCityInput = (e) =>
    {
      this.setState({location: e.target.value})

    }
    handleCitySubmit = async(e) =>
    {
      e.preventDefault();
      try{
        /*
        WARNING: always make sure you await for data with async
        */
        let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.location}&format=json`);
        this.setState({data: cityData.data[0], lat : parseInt(cityData.data[0].lat), lon : parseInt(cityData.data[0].lon)});//grabs data at location 0

     }
     catch(event)
     {
       this.openModal(event)
     }
    }
    hideModal = () => 
    {
      this.setState({
        modalDataState: false
      });
    }
    openModal = (errorMessage) => 
    {
      this.setState({
      modalDataState: true,
      errorMessage: errorMessage
      })
    }

  render()
  {
    return (
      /*
      */
      <>
      <Form id='daCity'>
        <Form.Label id='formLabel'> City Explorer!
        </Form.Label>
        <Form.Control
            onChange={this.handleCityInput}
            type='text'
            placeholder='Enter A Location'/>
        <Button
        variant='primary'
        onClick={this.handleCitySubmit}
        >Explore!</Button>
      </Form>
      {this.state.data.display_name ? (
        <Location
          city={this.state.data.display_name}
          lat={this.state.lat}
          long={this.state.lon}
          />
      ): null}
      </>
    );
  }
}
export default App;
