import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Content from "./components/content/content";


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
