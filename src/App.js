// src/App.js
import React from 'react';
import './App.css';
const App = () => {
  const handleFollowAll = () => {
    // Send a message to the content script to initiate the follow process
    window.postMessage({ type: "FOLLOW_ALL_USERS" }, "*");
  };

  return (
    <div>
      <button
       
        onClick={handleFollowAll}
      >
        Follow All
      </button>
    </div>
  );
};

export default App;
