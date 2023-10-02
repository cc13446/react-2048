import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/board'

import './index.css'

const App = () => {
  return (
    <div class="h-full bg-zinc-800">
      <h1 class="text-3xl font-bold underline">hello react</h1>
      <Board />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

