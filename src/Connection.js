import React, { Component } from 'react';
import './Connection.css';

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      progress: 0,
      status: 'disconnected'
    }
  }

  componentWillMount() {
    this.props.run(this.updateProgress)
  }

  updateProgress = (metrics) => {
    console.log('metrics', metrics)
    this.setState({ progress: metrics.progress});
    this.setState({ status: metrics.status});
    console.log('connection', this.state)
  }

  render() {

    console.log('hey in connection', this.props.run)

    return (
      <li className="connection-item">
        Connection: {this.props.id}   
        Progress: {this.props.progress} 
        Status: {this.props.status}   
        {this.state.status === "connected"
          ? ""
          : <button onClick={this.props.resetConnection(this.props.id)}>Cancel</button>
        }
      </li>
    )
  }
}

export default Connection;
