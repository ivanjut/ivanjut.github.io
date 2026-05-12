import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav/>
      <main className="app-content">
        <Main/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
