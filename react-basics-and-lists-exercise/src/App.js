import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {
  state = {
      username: 'Joyner Lucas'
  };

  onChangeHandler = (event) => {
    this.setState({username: event.target.value})
  };

  render() {
    const style = {
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        fontFamily: 'sans-serif'
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React basics and lists exercises</h1>
        </header>
        <div style={style}>
            <UserInput
            changed={(event) => this.onChangeHandler(event)}
            username={this.state.username}/>
            <UserOutput
            username={this.state.username}/>
        </div>
      </div>
    );
  }
}

export default App;
