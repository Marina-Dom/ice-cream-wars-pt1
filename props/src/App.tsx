import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {ContactList } from './components/ContactList';
import './components/ContactCard.css';

function App() {
  return (
    <div className="App">
      <ContactList></ContactList>
    </div>
  );
}

export default App;
