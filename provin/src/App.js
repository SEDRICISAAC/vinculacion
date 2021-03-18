import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Draw from './pages/Draw';
import Draw2 from './pages/Draw2';
import Levels from './pages/Levels';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <div>
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/singIn" component={Registro} />
      <Route path="/levels" component={Levels} />
      <Route path="/draw" component={Draw} />
      <Route path="/draw2" component={Draw2} />
     </Router>
    </div>
   
   
  );
}

export default App;