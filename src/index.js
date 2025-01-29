import ReactDOM from 'react-dom/client';
import './index.css';
import React from "react";
import App from './modules/App';

const divRoot = document.getElementById('root');
const root = ReactDOM.createRoot(divRoot);
root.render(
  <>
    <App />
  </>
);
