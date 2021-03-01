import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/game" component={Game} />
      </BrowserRouter>
    </div>
  );
}

export default App;
