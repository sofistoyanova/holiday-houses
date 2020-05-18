import { FaSearchLocation } from 'react-icons/fa';
import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
// import { Button } from 'reactstrap';

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
      <div className="main-filter section">
			<h3>Find your perfect Holiday House </h3>
			<div className="">
				<form className= "d-flex flex-wrap justify-content-flex-start">
					<div className="m-2 search-input-wrapper">
						<FaSearchLocation></FaSearchLocation>
						<input className="search-input where" placeholder="Where?"></input>
					</div>
					<div className="m-2 search-input-wrapper">Arrive at:<DatePicker className="search-input" onChange={this.onChangeArrive} value={this.state.arrivalDate}/></div>            
					<div className="m-2 search-input-wrapper">Depart at:<DatePicker className="search-input" onChange={this.onChangeDepart} value={this.state.departureDate}/></div>
					<div className="m-2 search-input-wrapper guests">Guests:<input className="search-input guests"  type="number" min="1" max="100" onChange={this.handleChange} /></div>
					<input type="button" className="search-input-wrapper btn btn-info" value="Search"></input>
				</form>
			</div>
      </div>
     
    );
  }
}

export default MainFilter