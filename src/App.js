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

      <div className = 'twitterbox'><Twitter /></div>
      <div className = 'youtubebox'><YouTube /></div>
      <div className = 'instagrambox'><Instagram /></div>
      <div className = 'googlebox'><Google /></div>


      </div>

      </div>


    )
  }
}

export default App;
