import React from 'react';
import './index.css';
import state, {addMessage, addPost, inputChange, messageChange, subscribe} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} inputChange={inputChange}
                 messageChange={messageChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(state);

subscribe(renderEntireTree)