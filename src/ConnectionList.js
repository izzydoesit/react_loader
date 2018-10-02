import React, { Component } from 'react';
import Connection from './Connection';
import './ConnectionList.css';

class ConnectionList extends Component {

  render() {
    return(
      <div className="connection-list-wrapper">
        <ul className="connection-list">
        {this.props.connections.map((connection, i) => {
          return <Connection
            key={i}
            id={connection.id}
            progress={connection.progress}
            status={connection.status}
            run={connection.run}
            rerunConnect={this.props.rerunConnect} 
            resetConnection={this.props.resetConnection}
          />
        })}
        </ul>
      </div>
    )
  }
}

export default ConnectionList;
