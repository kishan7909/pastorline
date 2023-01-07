import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons'
import 'font-awesome/css/font-awesome.min.css';
import React from 'react'

import { Route, Routes, useLocation } from "react-router-dom";
// import { Main } from "./components/Main";
// import { Modal } from "./components/Modal";
import Home from './pages/Home'
import Modal1 from './pages/Modal1';
import Modal2 from './pages/Modal2';

function App() {
  const location = useLocation();
  console.info('----------------------------');
  console.info('location =>', location);
  console.info('----------------------------');
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>

        <Route path="/" element={<Home />}>
          <Route path="/modal1" element={<Modal1 />} />
          <Route path="/modal2" element={<Modal2 />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="modal1" element={<Modal1 />} />
          <Route path="modal2" element={<Modal2 />} />
        </Routes>
      )}
    </div>
  );
}

export default App
