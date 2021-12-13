import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./components/content/profile/profile";
import Messages from "./components/content/messages/messages";
import Layout from "./components/layout/layout";
import DialogName from "./components/content/messages/dialogname/dname";
import DialogMessage from "./components/content/messages/message/message";

let App = () => {
    let dialogsData = [
        {id: 1, name: "vasya"},
        {id: 2, name: "liza"},
        {id: 3, name: "vlad"}
    ];

    let messagesData = [
        {id: 1, message: "hello"},
        {id: 2, message: "hi"},
        {id: 3, message: "hello"}
    ];

    let dialogName = dialogsData.map(user => <DialogName name = {user.name} id = {user.id} />);
    let dialogMessage = messagesData.map(m => <DialogMessage message = {m.message} id = {m.id}/>);

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/profile" element={<Profile name = "ilia"/>}/>
                <Route path="/messages" element={<Messages user = {dialogName} message = {dialogMessage}/>}/>
                <Route path="/messages/1"/>
            </Route>
        </Routes>
    );
}

export default App;
