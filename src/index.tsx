import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { AnswerProvider } from './Context/AnswerProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnswerProvider>
        <App />
      </AnswerProvider>
    </BrowserRouter>
  </React.StrictMode>
);