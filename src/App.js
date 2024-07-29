//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import ScrollToTop from './pages/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Domiciliary from './pages/Domiciliary';
import Sitting from './pages/Sitting';
import Personal from './pages/Personal';
import Social from './pages/Social';


function App() {
  return (
    <BrowserRouter basename='/'>
      <ScrollToTop/>
        
          <Routes>
            <Route forceRefresh={true} path="/" element={<Layout/>}>
            <Route forceRefresh={true} index element = {<Home/>}></Route>
            <Route forceRefresh={true} path='/about' element= {<About/>}></Route>
            <Route forceRefresh={true} path='/contact' element= {<Contact/>}></Route>
            <Route forceRefresh={true} path='/services' element= {<Domiciliary/>}></Route>
            <Route forceRefresh={true} path='/social' element= {<Social/>}></Route>
            <Route forceRefresh={true} path='/personal' element= {<Personal/>}></Route>
            <Route forceRefresh={true} path='/sitting' element= {<Sitting/>}></Route>
            
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
