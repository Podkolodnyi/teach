import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./components/content/profile/profile";
import Messages from "./components/content/messages/messages";
import Layout from "./components/layout/layout";

let App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Routes>
  );
}

export default App;
