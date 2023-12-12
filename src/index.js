import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookiesProvider } from "react-cookie";
import { GlobalStyle } from './globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);