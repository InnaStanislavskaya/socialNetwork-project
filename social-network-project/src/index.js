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

let dialogsData = [
  {id: 1, name: 'Inna'},
  {id: 2, name: 'Angela'},
  {id: 3, name: 'Boris'},
  {id: 4, name: 'Dmitriy'},
]

let messagesData = [
  {id: 1, message: "Hello!"},
  {id: 2, message: "How are you?!"},
  {id: 3, message: "How is your React learning progressing?"},
  
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
