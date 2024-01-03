import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './components/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='/About' element={<About/> } />
            <Route path="*" element={<NoPage/>} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
