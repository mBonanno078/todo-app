import React from 'react';
import ReactDOM from 'react-dom/client';
import AppTodo from './Components/AppTodo/AppTodo';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppTodo />
  </React.StrictMode>
);