import React from 'react';
import './index.css';
import store from "./Redux/Redux-store";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})

