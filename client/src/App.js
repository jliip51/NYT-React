import React from 'react';
import './styles/App.css';
import Jumbotron from './components/Jumbotron';
import Panel from './components/Panel';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Jumbotron />
        <Panel title="Search"/>
        <Panel title="Results"/>
        <Panel title="Saved-Articles"/>
      </div>
    );
  }
}

export default App;

//headline.main
//web_url
//snippet
//_id
