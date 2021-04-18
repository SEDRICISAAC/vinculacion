import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Game1 from './pages/dragDrop/game1';
import Draw from './pages/draw/Draw';
import Draw2 from './pages/draw/Draw2';
import Draw3 from './pages/draw/Draw3';
import Draw4 from './pages/draw/Draw4';
import Draw5 from './pages/draw/Draw5';
import Levels from './pages/levels/Levels';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <div>
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Registro} />
      <Route path="/levels" component={Levels} />
      <Route path='/draw' component={Draw} />      
      <Route path="/draw2" component={Draw2} />
      <Route path="/draw3" component={Draw3} />
      <Route path="/draw4" component={Draw4} />
      <Route path="/draw5" component={Draw5} />
      <Route path="/game1" component={Game1} />
     </Router>
    </div>
   
   
  );
}

export default App;
