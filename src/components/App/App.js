import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';

class App extends React.Component {
  render () {
    return (
      <div class='App'>
        <h1>ravenous</h1>
        <SearchBar />
        <Business />
      </div>
  );
  }
}

export default App;
