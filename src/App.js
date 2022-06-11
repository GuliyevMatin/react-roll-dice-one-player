import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RollDice1 from './RollDice/RollDice-1';


class  App extends Component {
 
  render() {
    return (
      <div className="container">
        <RollDice1/>
      </div>
    );

  }
}

export default App;
