import React from 'react';
import PageRoute from './PageRoute/index'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import ContextProvider from './Context';

function App() {
  
  return (
    <ContextProvider>
      <Router>
        <PageRoute />
      </Router>
    </ContextProvider>
  );
}

export default App;
