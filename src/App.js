import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/ProductPage/Products';
import NavBar from './components/Navigation/NavBar';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div>
        
        <NavBar/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      
      
    </div>
  );
}

export default App;
