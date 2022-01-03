import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} 
            dispatch={store.dispatch.bind(store)}
            store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
