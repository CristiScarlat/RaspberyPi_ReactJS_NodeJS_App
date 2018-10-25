import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import Home from './components/Home';
import Header from './components/Header';


class App extends Component {
 
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
