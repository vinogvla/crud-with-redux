import React, { Component } from 'react';
import CustomerManager from './containers/CustomerManager';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <CustomerManager />
        <Footer />
      </div>
    );
  }
}

export default App
