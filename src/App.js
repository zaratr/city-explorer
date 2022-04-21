import './App.css';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import React from 'react';
import Location from './Location';
import WeatherReporter from './WeatherReporter'
import Movies from './Movies'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      data: 0,//receives from state - object empty for now
      location: '',
      lat: null,
      lon: null,
      errorMessage: '',
      modalDataState: false,
      weatherReporter: [],//array of objects
      arrayOfMoviesObj: ''

    };
  }

  handleCityInput = (e) => {
    this.setState({ location: e.target.value });
  };


  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      /*
      WARNING: always make sure you await for data with async
      https://api.themoviedb.org/3/movie/550?api_key=17f3a718b0f5d36680aae68a930ccfa4
      */
      /*UPDATE: the old way without server requests */

      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.location}&format=json`;
      let cityData = await axios.get(url);
      this.setState({data: cityData.data[0], lat: cityData.data[0].lat, lon: cityData.data[0].lon});//grabs data at location 0
      this.handleForecast();//does the heavy work for forecast
      this.handleMovies();//does the heavy work for the movies
    }
    catch (anError) {
      this.openModal(anError);
      console.error(anError.name + ': ' + anError.message);
    }
  }


  handleForecast = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.location}`;
      let daWeather = await axios.get(url);
      console.log(url);
      this.setState({
        weatherReporter: daWeather.data
      })
    }
    catch (anError) {
      this.openModal(anError);
      console.error(anError.name + ': ' + anError.message);
    }
  }
  handleMovies = async () =>{
    try{
        let url = `${process.env.REACT_APP_SERVER}/movies?city_name=${this.state.location}`
        let themovies = await axios.get(url);
        this.setState({
          arrayOfMoviesObj : themovies
        })
    }
    catch(e)
    {
      this.openModal(e);
      console.error(e.captureStackTrace());
    }
  }




  hideModal = () => {
    this.setState({
      modalDataState: false
    });
  }
  openModal = (errorMessage) => {
    this.setState({
      modalDataState: true,
      errorMessage: errorMessage
    })
  }

  render() {
    return (
      <>
        <Form id='daCity' onSubmit={this.handleCitySubmit}>
          <Form.Label htmlFor='formLabel'> 
                City Explorer!
          </Form.Label>
          <Form.Control
            id='formLabel'
            onChange={this.handleCityInput}
            type='text'
            placeholder='Enter A Location' 
            />
            
          <Button
            variant='primary'
            type='Submit'
            //onClick={this.handleCitySubmit}
          >
            Explore!
          </Button>

        </Form>


        {this.state.data ? (
          <Location
            city={this.state.data.display_name}
            lat={this.state.lat}
            long={this.state.lon}
          />
        ) : null}
        {this.state.weatherReporter.length>0 ? (
          <WeatherReporter
            city={this.state.data.display_name}
            forecast={this.state.weatherReporter}
          //weather reporter has all info to pass on
          />
        ) : null}
        
        {this.state.arrayOfMoviesObj ?(
          <Movies
            city={this.state.data.display_name}
            theater={this.state.arrayOfMoviesObj.data}
            />
        ):null}


      </>
    );
  }
}
export default App;
