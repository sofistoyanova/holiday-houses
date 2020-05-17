import { FaSearchLocation } from 'react-icons/fa';
import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import { Button } from 'reactstrap';

 
class MainFilter extends Component {
  state = {
    arrivalDate: new Date(),
	departureDate: new Date(),
	guestsValue: "1"
  }
  onChangeArrive = arrivalDate => this.setState({ arrivalDate })
  onChangeDepart = departureDate => this.setState({ departureDate })
  handleChange = guestsValue => this.setState({guestsValue})
  render() {

    return (
      <div>
        <h2>Find your perfect Holiday House </h2>
        <form className= "d-flex justify-content-center">
            <div className="m-2 search-input-wrapper">
                <FaSearchLocation></FaSearchLocation>
                <input className="search-input" placeholder="Where do you want to go?"></input>
            </div>
            <div className="m-2 search-input-wrapper">Arrive at:<DatePicker className="search-input" onChange={this.onChangeArrive} value={this.state.arrivalDate}/></div>            
	        <div className="m-2 search-input-wrapper">Depart at:<DatePicker className="search-input" onChange={this.onChangeDepart} value={this.state.departureDate}/></div>
			<div className="m-2 search-input-wrapper">Guests:<input className="search-input guests"  type="number" min="1" max="100" onChange={this.handleChange} /></div>
			<input type="button" className="btn btn-info" value="Search"></input>
        </form>

      </div>
     
    );
  }
}

export default MainFilter