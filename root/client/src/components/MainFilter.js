import { FaSearchLocation } from 'react-icons/fa';
import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

 
class MainFilter extends Component {
	// constructor(props) {
    //     super(props);
    //     this.state = {
	// 		arrivalDate: new Date(),
	// 		departureDate: new Date(),
	// 		guestsValue: "1"
    //     }
    // }
  state = {
    arrivalDate: new Date(),
	departureDate: new Date(),
	guestsValue: 1
  }
  onChangeArrive = arrivalDate => this.setState({ arrivalDate })
  onChangeDepart = departureDate => this.setState({ departureDate })
  handleChange = guestsValue => this.setState({guestsValue})
  render() {

    return (
      <div>
        <h2>Find your perfect Holiday House </h2>
        <form>
            <div>
                <FaSearchLocation></FaSearchLocation>
                <input placeholder="Where do you want to go?"></input>
            </div>
            <div>
				Arrive at:
				<DatePicker onChange={this.onChangeArrive} value={this.state.arrivalDate}/>
            </div>            
			<div>
				Depart at:
				<DatePicker onChange={this.onChangeDepart} value={this.state.departureDate}/>
            </div>
			<div>
				Guests:
				<input type="number" min="1" max="100"  value={this.state.guestsValue} onChange={this.handleChange}/>
			</div>
        </form>

      </div>
     
    );
  }
}

export default MainFilter