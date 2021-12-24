import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

let postsData = [
  {id: 1, message: "Hello! It is my first post", likeCount: "104"},
  {id: 2, message:  "How are you?", likeCount: "98"},
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
