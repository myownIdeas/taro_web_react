import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, HashRouter, Link, Route } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import MainModel from './MainModel.js';
import $ from 'jquery';
function Home() {

    const initialState = { email: "" };
    const url = '';
    const [data, setData] = useState(initialState);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);


    const clearState = () => {
        setData({ ...initialState });
    };

    function changeHandler(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const validate = (value) => {
        const error = {};
        const regex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'

        if (!value.email) {
            error.email = 'email is required';
        }
        return error;
    };
    function formValidator(values) {
        const error = {};
        if (!values.email) {
            error.email = 'email is required';
        }
        return error;
    }
    function submitForm(e) {
        e.preventDefault();
        setformErrors(validate(data));

        // if(Object.keys(formErrors).length ===0 ){
        axios.post('http://localhost:3000/email/save-email', data,{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH',
            }
        }).then(res => {
            clearState();
            swal({
                title: "Thank you!",
                text: "Thanks for joining Taro, we'll be back to you soon with our new exciting new features!",
                className: 'subscribed-modal'
            });
            //$('#subscribeModal').modal('hide');
        });
        //  }

    };

    function showSubscribe(e) {
        e.preventDefault();
        $('#subscribeModal').modal('show');
    }



    return (
        <>

            <section className='hero-sec home-hero-sec'>
                <div className='container-fluid container-taro'>
                    <div className='hs-content'>
                        <img src="frontend/images/counter.svg" alt="" />
                        <h1>Pay in Four</h1>
                        <p>Split purchases into four equal payments over three months with <span className='highlighted'><span>Pakistan's first licensed</span></span> and Shariah friendly <span className='highlighted'><span>BNPL provider</span></span></p>
                        <div className='hhs-banner'>
                            <img src="frontend/images/home-hero-payments-thumb.png" alt="" className='payments-thumb' />
                            <img src="frontend/images/taro/iphone.png" alt="" className='phone-thumb' />
                            <img src="frontend/images/home-hero-orders-thumb.png" alt="" className='orders-thumb' />
                            <img src="frontend/images/home-hero-sec-circles.svg" alt="" className="home-hero-circles" />
                        </div>
                        <div className='subscribe-widget'>
                            <h6>Subscribe to get early access</h6>
                            <form action="" onSubmit={(e) => { submitForm(e) }}>
                                <div className='subscribe-widget-form'>
                                    <div className='form-group input-field-wrap' >
                                        <img src="frontend/images/envelope.svg" alt="" className='icon-envelope' />
                                        <input  type="email" required onChange={changeHandler} name="email" value={data.email} autoComplete="off" className='form-control' placeholder='Your email address' />
                                    </div>
                                    <div className='form-group'>
                                        <button type="submit" className='btn btn-primary'>Subscribe</button>
                                    </div>
                                </div>
                            </form>
                            <p>No spam, notifications only about new products and updates. You can always unsubscribe.</p>
                        </div>
                    </div>
                </div>
                <img src="frontend/images/hero-bg.png" alt="" className="hero-bg" />
            </section>

            <section className='page-sec complaint-sec'>
                <div className='container-fluid container-taro'>
                    <header className='page-sec-header'>
                        <h2>Shariah friendly,</h2><br /><h2> flexible, and easy to use.</h2>
                        <p>We're changing the way you shop, and enabling you to pay on your own terms</p>
                    </header>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='cs-card'>
                                <div className="cs-card-icon">
                                    <img src="frontend/images/shopingBag.svg" alt="" />
                                </div>
                                <h6>Freedom</h6>
                                <p>Enjoy the freedom of paying how you want, when you want. By using Taro, you’re able to enjoy the things you want sooner.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='cs-card'>
                                <div className="cs-card-icon">
                                    <img src="frontend/images/hand.svg" alt="" />
                                </div>
                                <h6>Pay in 4</h6>
                                <p>Split purchases into 4 equal payments with your favorite retailers through our app and website, or in-store, with no interest or fees.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='cs-card'>
                                <div className="cs-card-icon">
                                    <img src="frontend/images/smartphone.svg" alt="" />
                                </div>
                                <h6>No impact your credit</h6>
                                <p>Each time you shop with us, your credit limit grows. As you build your credit, you’ll be elligable for more lending products</p>
                            </div>
                        </div>
                    </div>
                    <div className='pay-four-card'>
                        <h3>Anywhere, Anytime: Pay in Four</h3>
                        <div className='pfc-content'>
                            <p>Leverage Taro to split payments at all your favorite retailers and manage your spending on the web or through our app, anytime & anywhere.</p>
                            <div className='subscribe-widget'>
                                <form action="" onSubmit={(e) => { submitForm(e) }}>
                                    <div className='subscribe-widget-form'>
                                        <div className='form-group input-field-wrap'>
                                            <img src="frontend/images/envelope.svg" alt="" className='icon-envelope' />
                                            <input type="email" required onChange={changeHandler} name="email" value={data.email} autoComplete="off" className='form-control' placeholder='Your email address' />
                                        </div>
                                        <div className='form-group'>
                                            <button type="submit" className='btn btn-light'>Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                                <p>No spam, notifications only about new products and updates. You can always unsubscribe.</p>
                            </div>
                        </div>
                        <img src="frontend/images/circles-shape.svg" alt="" className='circles-shape' />
                    </div>
                </div>
                <div id="triggerfix"></div>
            </section>
            <section className='steps-slider-sec'>
                <div id="slideoverlay"></div>
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="ss-slide">
                                <div className='container-fluid container-taro'>
                                    <div className='ss-slide-content'>
                                        <h6>Step 1</h6>
                                        <h3>Fill your cart</h3>
                                        <div className='ss-slide-content-img'>
                                            <img src="frontend/images/taro/1.png" alt="" />
                                        </div>
                                        <p>Shop your favorite stores and then select Taro at checkout. Enter a few pieces of information for a real-time decision.</p>
                                        <a className="btn btn-primary" href="#" onClick={showSubscribe}>Subscribe</a>
                                    </div>
                                    <div className='ss-slide-img'>
                                        <img src="frontend/images/taro/1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ss-slide">
                                <div className='container-fluid container-taro'>
                                    <div className='ss-slide-content'>
                                        <h6>Step 2</h6>
                                        <h3>Choose how you pay</h3>
                                        <div className='ss-slide-content-img'>
                                            <img src="frontend/images/taro/2.png" alt="" />
                                        </div>
                                        <p>Select the payment schedule that works for you, then confirm your loan. We’ll never charge more than you see up front.</p>
                                        <a className="btn btn-primary" href="#" onClick={showSubscribe}>Subscribe</a>
                                    </div>
                                    <div className='ss-slide-img'>
                                        <img src="frontend/images/taro/2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ss-slide">
                                <div className='container-fluid container-taro'>
                                    <div className='ss-slide-content'>
                                        <h6>Step 3</h6>
                                        <h3>Make easy monthly payments</h3>
                                        <div className='ss-slide-content-img'>
                                            <img src="frontend/images/taro/3.png" alt="" />
                                        </div>
                                        <p>Download the Taro app or sign in at taro.pk. We’ll send you email and text reminders so you never miss a payment.</p>
                                        <a className="btn btn-primary" href="#" onClick={showSubscribe}>Subscribe</a>
                                    </div>
                                    <div className='ss-slide-img'>
                                        <img src="frontend/images/taro/3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>

                </div>
            </section>
            <MainModel />


        </>
    )
}

export default Home;
