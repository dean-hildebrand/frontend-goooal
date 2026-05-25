import React from 'react';
import { Provider } from './components/ui/provider'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
