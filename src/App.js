import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Programme from './pages/programme/Programme';
import Realisation from './pages/realisation/Realisation';
import Contact from './pages/contact/Contact';


const App = () => {

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/schedule' element={<Programme />} />
          <Route exact path='/realization' element={<Realisation />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>


    </>
  )
}

export default App;
