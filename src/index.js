import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Post from "./components/content/profile/posts/post/post";


let state = {
    messagesPage: {
        dialogsData: [
            {id: 1, name: "vasya"},
            {id: 2, name: "liza"},
            {id: 3, name: "vlad"}
        ],
        messagesData: [
            {id: 1, message: "hello"},
            {id: 2, message: "hi"},
            {id: 3, message: "hello"}
        ]
    },


    profilePage: {
        postsData: [
            {name: "vasya", message: "hi", likes: 9},
            {name: "nina", message: "kelso", likes: 15},
            {name: "kolya", message: "kuku", likes: 7},
            {name: "masha", message: "hello", likes: 6},
        ]
    }
};


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
