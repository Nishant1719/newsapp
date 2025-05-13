import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';


export default class App extends Component {
  // c = "Nishant";
  render() {
    return (
      <div>
        {/* Hi this is class based component practices {this.c} */}
        <Navbar/>
        <NewsComponent pageSize={5}/> 
      </div>
    )
  }
}

