import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Geomini:wght@200..800&display=swap"
            rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Geomini:wght@200..800&family=Ms+Madi&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
        />
        <App />
    </React.StrictMode>
);
