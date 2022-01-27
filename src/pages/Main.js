import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, HashRouter, Link, Route } from "react-router-dom";


import Home from "./Home.js";
import About from "./About.js";
import HeaderWrap from "./Header.js";
import FooterWrap from "./Footer.js";
import MobileVerification from "./MobileVerification";
export default class Main extends Component {

    constructor(state) {
        super(state);
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                    {(location.pathname === '/render-page-for-customer-verification'?'':<HeaderWrap />)}

                    <div className='wrapper'>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route exit path="/render-page-for-customer-verification" element={<MobileVerification />}></Route>
                        </Routes>

                    </div>
                    {(location.pathname === '/render-page-for-customer-verification'?'':<FooterWrap />)}

                </Router>
            </React.Fragment>

        )
    }
}
if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
