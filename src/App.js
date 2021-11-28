import './App.css';
import Header from "./components/header";
import Nav from "./components/nav";
import Content from "./components/content";


let App = () => {
  return (
      <div className={'AppWrapper'}>
          <Header />
          <Nav />
          <Content />
      </div>
  );
}

export default App;
