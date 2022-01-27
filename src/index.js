import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './app.scss';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home.js';

import HeaderWrap from "./pages/Header";
import MobileVerification from "./pages/MobileVerification";
import FooterWrap from "./pages/Footer";
ReactDOM.render(
    <React.Fragment>
        <Router>
            <HeaderWrap />

            <div className='wrapper'>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exit path="/render-page-for-customer-verification" element={<MobileVerification />}></Route>
                </Routes>

            </div>
           <FooterWrap />

        </Router>



    </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
