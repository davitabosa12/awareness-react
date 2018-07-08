import React, { Component } from 'react';



import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'

import OptionsTab from './components/OptionsTab';

class App extends Component {
  componentDidMount(){
    
  }
  render() {
    
    return (
      <div className="App">
        <Navigation/>
        <OptionsTab/>
        
      </div>
    );
  }
}

export default App;
