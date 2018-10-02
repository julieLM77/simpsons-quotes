import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Lamp from "./Lamp.js";




class App extends Component {

  constructor() {
      super();
    this.state = {
        working: true
          };
}
Click = () => {
this.setState({ working: !this.state.working });
}

  render() {
      const homer = this.state.working ? 'Homer is working' : 'Homer on break';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? 'miam' : 'App-logo'} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        
       
        <button onClick={this.Click} className={homer}>{homer}</button>
        <Quotes/>
       
      </div>
    );
  }
}

export default App;