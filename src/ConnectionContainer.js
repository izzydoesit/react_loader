import React, { Component } from 'react';
import ConnectionList from './ConnectionList';
import ListStatus from './ListStatus';
import './ConnectionContainer.css';

class ConnectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [...this.props.connections]
    }
  }

  rerunConnections = () => {
    this.setState({ connections: [...this.props.connections]})
  }

  resetConnection = (id) => {
    this.state.connections[id-1].status = 'disconnected';
    this.state.connections[id-1].progress = 0;
    this.forceUpdate();
  }

  findStatusItems = (targetStatus) => {
    return this.state.connections.filter((item) => item.status === targetStatus).length;
  }

  allConnected = () => {
    return this.findStatusItems('connected') === this.state.connections.length;
  }

  render() {
    return (
      <div className="connection-container">
        {this.allConnected()
          ? <button onClick={this.rerunConnections}>RE-RUN</button>
          : <button>START</button>
        }
        <ListStatus findStatusItems={this.findStatusItems}/>
        <ConnectionList 
          connections={this.state.connections}
          resetConnection={this.resetConnection}
        />
      </div>
    )
  }

}

export default ConnectionContainer;
