import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// The ReactDOM.createRoot function is used to create a "root" for the React App, which means that a separate context is created for the React component tree that is rendered in the DOM. This improves the efficiency of rendering and updating components.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // The App component is rendered inside a React.StrictMode element, which is a React component that helps detect and signal potential problems in the application, such as unexpected state changes or use of deprecated APIs.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

