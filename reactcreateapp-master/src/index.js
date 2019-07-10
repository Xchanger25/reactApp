import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import AppHook from './components/AppHook';

ReactDOM.render(<AppHook initialCount={20} />, document.getElementById('root'));
