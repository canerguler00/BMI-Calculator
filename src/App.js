import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <nav>
        <Link className='nav-home' to="/">Home</Link> |{" "}
        <Link className='nav-about'  to="about">About</Link>
      </nav>
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}/>      
      </Routes>      
    </div>
  );
}

export default App;
