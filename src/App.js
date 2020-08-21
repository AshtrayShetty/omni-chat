import React from 'react';
import ChatRoom from './ChatComp/ChatRoom';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App" style={{display: "grid"}}>
      <Nav/>
      <ChatRoom/>
    </div>
  );
}

export default App;
