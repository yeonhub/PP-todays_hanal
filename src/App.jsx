import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import './assets/css/reset.css'
import Info from './components/Info';
import Join from './components/Join';
import Nearby from './pages/Nearby';
import Myhanal from './pages/Myhanal';
import Wonder from './pages/Wonder';
import HanalDetail from './pages/HanalDetail';
import HanalComment from './components/HanalComment';

const App = () => {

  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/info" element={<Info />} />
            <Route path="/join" element={<Join />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/myhanal" element={<Myhanal />} />
            <Route path="/wonder" element={<Wonder />} />
            <Route path="/hanaldetail" >
              <Route index element={<HanalDetail />} />
              <Route path=':boardID' element={<HanalComment />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;