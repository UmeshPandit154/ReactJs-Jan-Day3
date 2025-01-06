//1.Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import something from somelocation/somelibrary
import MyComponent1 from './MyComponent1';



const root = ReactDOM.createRoot(document.querySelector('div.umesh'));
root.render(
  <React.StrictMode>
    <MyComponent1 />
  </React.StrictMode>
);

//3.Export Area

