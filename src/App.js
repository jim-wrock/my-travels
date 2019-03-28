import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel'
import Travels from './Travels'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Travel
          destination="Tahiti"
          country="French-Polynesia"
          photo="http://moneyinc.com/wp-content/uploads/2016/06/Tahiti.jpg"
          distance="Too Far"
        />
        <Travel
          destination="Sulawesi"
          country="Indonesia"
          photo="http://1.bp.blogspot.com/-KZvbA5kpWkY/VfLaRoPnFzI/AAAAAAAABR4/InLYcWY9yQw/s1600/suku%2Bbajo.jpg"
          distance="Too Far"
        /> */}
        <Travels />

      </div>
    );
  }
}

export default App;
