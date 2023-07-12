import React from 'react';
import GlobalStyle from '../Global';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import './assets/css/reset.css'
import Info from './components/Info';
import Join from './components/Join';

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
          <Route path="/join" element={<Join />} />

          {/* <Route path="/notice">
            <Route index element={<Notice />} />
            <Route path=":noticeID" element={<NoticeDetail />} />
          </Route> */}

          {/* <Route path="/customer">
            <Route index element={<Customer />} />
            <Route path="customeradd" element={<CustomerAdd />} />
            <Route path="customeredit" element={<CustomerEdit />} />
            <Route path=":customerID" element={<CustomerDetail />} />
          </Route> */}

        </Route>



      </Routes>
    </BrowserRouter>
  );
};

export default App;