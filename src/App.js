
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import React, { Component } from 'react';
import './App.css';

 import Header from "./components/Header/index";
import Home from './components/Home/index';
import Footer from './components/Footer/index';

class App extends Component {
  render() {
    return (
      <div>
         <Header />
         <Home/>
        <Footer/>
        
       

      </div>
    );
  }
}

export default App;