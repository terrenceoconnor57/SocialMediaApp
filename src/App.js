import React, {Component} from 'react';
import MenuBar from './MenuBar';
import Twitter from './Twitter';
import YouTube from './YouTube';
import Instagram from './Instagram';
import Google from './Google';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {


    return (

      <div className = 'app'>

      <MenuBar />


      <div className = 'socialgrid'>

      <div className = 'box'><Twitter /></div>
      <div className = 'box'><YouTube /></div>
      <div className = 'box'><Instagram /></div>
      <div className = 'box'><Google /></div>


      </div>

      </div>


    )
  }
}

export default App;
