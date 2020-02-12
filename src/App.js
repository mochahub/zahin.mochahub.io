import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <GitHubCalendar username="zahin-mohammad" />
      </header>
    </div>
  );
}

export default App;
