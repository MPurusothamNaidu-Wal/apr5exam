import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoginApp from './Login';
import TodoApp from './Todos';

function App() {
  return (
    <div className='App'>
      <TodoApp />
    </div>
  );
}

export default App;
