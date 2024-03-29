import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Login}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
