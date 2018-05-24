import React, { Component } from 'react';

class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      flight: {
        destination: "Tokyo",
        departureTime: "20:30",
        arrivalTime: "22:30",
        cancelled: false,
      },
    };
  }

  renderStatus = () => {
    const { flight } = this.state;

    let status;
    if (flight.cancelled) {
      status = 'Cancelled';
    } else if (flight.arrived) {
      status = 'Arrived';
    } else {
      status = 'Regular';
    }
    return status;
  }

  alreadyCancelled = () => {
    alert("Already cancelled");
  }

  alreadyArrived = () => {
    alert("You can't cancel a flight if it already finished");
  }

  cancel = () => {
    this.setState((prevState) => {
      const flight = {
        ...prevState.flight,
        cancelled: true
      };
      return {
        flight: flight,
      }
    });

    // Another way, but you should avoid cloning
    // const flight = clone(this.state.flight);
    // flight.cancelled = true;
    // this.setState({
    //   flight: flight,
    // });
  }

  handleClick = () => {
    const { flight } = this.state;
    if(flight.cancelled) {
      return this.alreadyCancelled();
    } else if (flight.arrived) {
        return this.alreadyArrived();
    } else {
        return this.cancel();

    }
  }

  render() {
    const { flight } = this.state;
    const disabledStyle = {
      backgroundColor: 'gray',
    };
    return (
       <div>
           <p>
               Destination: { flight.destination }
           </p>
           <p>
               Departure time: { flight.departureTime }
           </p>
           <p>
               Arrival time: { flight.arrivalTime }
           </p>
           <p>
               Flight status: { this.renderStatus() }
           </p>

           <button
             style={
               flight.cancelled ? disabledStyle : null
             }
             onClick={this.handleClick}
           >
             Cancel
           </button>
       </div>
    )
  }
}

export default ConditionalRendering;
