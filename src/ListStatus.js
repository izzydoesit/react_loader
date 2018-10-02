import React, { Component } from 'react';
import './ListStatus.css';

class ListStatus extends Component {

  render() {
    return (
      <div className="status-list">
      <p>Disconnected: {this.props.findStatusItems('disconnected')}</p>
      <p>Loading: {this.props.findStatusItems('loading')}</p>
      <p>Connecting: {this.props.findStatusItems('connecting')}</p>
      <p>Importing: {this.props.findStatusItems('importing')}</p>
      <p>Finishing: {this.props.findStatusItems('finishing')}</p>
      <p>Connected: {this.props.findStatusItems('connected')}</p>
    </div>
    )
  }
}

export default ListStatus;

