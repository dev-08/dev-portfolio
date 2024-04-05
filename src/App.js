import './App.css';
import About from './component/About';
import Expe from './component/Experience';
import Header from './component/Header';
import Home from './component/Home';
import Portfolio from './component/Portfolio';
import Social from './component/Social';



function App() {
  return (
    <div className="App">
       

      <Header/>
        <Home/>
      <Social/>
      <About/>
      <Portfolio/>
      <Expe/>
    </div>
  );
}

export default App;
