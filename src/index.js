import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BallsTestClass } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

export function render() {
  root.render(<BallsTestClass />);
}

render();
