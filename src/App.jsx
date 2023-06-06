import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Status from './components/Status';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/singleshow/:id' element={<Single />} />
          <Route path='/booking' element={<Status />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
