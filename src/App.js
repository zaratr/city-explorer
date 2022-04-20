import './App.css';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import Location from './Location';
//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import WeatherReporter from './Weather'

class App extends React.Component
{
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
      modalDtaState: false,
      weatherReporter: ''
      //weatherReporter: {}

    };
  }

    handleCityInput = (e) =>
    {
      this.setState({location: e.target.value})

    }
    handleCitySubmit = async(e) =>
    {
      e.preventDefault();
      try
      {
        /*
        WARNING: always make sure you await for data with async
        */
       /*UPDATE: the old way without server requests */
        let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.location}&format=json`);
        this.setState({
          data: cityData.data[0], lat : parseInt(cityData.data[0].lat), lon : parseInt(cityData.data[0].lon
            )});//grabs data at location 0
        this.handleForecast();
      }
      catch(anError)
      {
        this.openModal(anError);
        //TODO: make an error message
        console.error(anError.name + ': ' + anError.message);
      }
    }


    handleForecast = async () =>
    {
      //TODO: check if removing default is needed
      try
      {
          /*UPDATE: new way with server requesting*/
        let url = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.location}`;
        let daWeather = await axios.get(url);
        console.log(typeof(daWeather.data))
        this.setState({
          weatherReporter : daWeather.data,
        })
      }
      catch(anError)
      {
        this.openModal(anError);
        //TODO: make an error message
        console.error(anError.name + ': ' + anError.message);
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
      {this.state.weatherReporter ? (
        <WeatherReporter
          city={this.state.data.display_name}//has been given from above line: 106
          forecast={this.state.weatherReporter.data}
          //weather reporter has all info to pass on
        />
      ):null}


      </>
    );
  }
}
export default App;
