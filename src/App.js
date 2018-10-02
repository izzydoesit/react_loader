///////////
/* YOU DO NOT NEED TO CHANGE ANYTHING BETWEEN LINE 1 and LINE 40  */
//////////

import React, { Component, addons } from 'react';
import ConnectionContainer from './ConnectionContainer';
import './App.css';

const STATUSES = [ 'disconnected', 'loading', 'connecting', 'importing', 'finishing', 'connected' ]

function connect() {
  let progress = 0
  let status = STATUSES[0]

  let i = 0
  return function(callback) {  // returns a function that takes a callback argument
   (function loop(next, progress) {  // has inner function "LOOP" w/ 2 args (next, progress) up to next = 6
    var rand = Math.round(Math.random() * 1000) + 500;  // selects random number from 1 to 1500 to call in setTimeout
    setTimeout(function() {  // declares setTimeout function
      if (STATUSES[next]) {  // if NEXT arg exists in STATUSES array 
        callback({  // callback function is called w/ progress (int) AND status (string) args
          progress: progress.toFixed(2),
          status: STATUSES[next]
        });
        loop(next + 1, progress * 1 + (1 / (STATUSES.length - 1)));  // loop function is called w/ next status and incremented progress variable
      } else {
        return  // else if it has reached end of STATUSES array, just returns
      }
    }, rand);  // setTimeout being passed random number as interval
  }(i, progress))  // loop function being called w/ i and progress variable
}};

const run = connect()

const connections = [
  { id: 1, run },
  { id: 2, run },
  { id: 3, run },
  { id: 4, run },
  { id: 5, run }
];

//////////
/* YOU DO NOT NEED TO CHANGE ANYTHING ABOVE THIS LINE */
//////////

class App extends Component {

  render() {
    return <div className="app">
      <ConnectionContainer connections={connections}/>
    </div>
  }
}

export default App;
