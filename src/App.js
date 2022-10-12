import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Route,Routes,Router } from 'react-router-dom';

function App() {
  return ( 
  
    <div className="App">
     <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes> 
    </div>
   
  );
}

export default App;
