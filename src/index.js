import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-snapshot';

ReactDOM.render(
  render(<React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  )
);


