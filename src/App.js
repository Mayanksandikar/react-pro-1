
import './App.css';
// import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Bolly from './components/Bolly';
import Food from './components/Food';
import Tourism from './components/Tourism';
import Home from './components/Home';
import Details from './components/Details';
import Fitness from './components/Fitness';
import Technology from './components/Technology';
import Article from './components/Articles';

function App() {
  return (
    <Details>
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="Category/Tourism" element={<Tourism/>}/>
          <Route path="Category/Fitness" element={<Fitness/>}/>
          <Route path="Category/Technology" element={<Technology/>}/>
          <Route path="Category/Bollywood" element={<Bolly/>}/>
          <Route path="Category/Food" element={<Food/>}/>
          <Route path='/article/:ids' element={<Article />} />
        </Routes>
      </Router>
    </div>
    </Details>
  );
}

export default App;
