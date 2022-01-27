import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {Helmet} from "react-helmet";

function Footer() {
    const initialState = { email: "" };
    const url = '';
    const [data, setData] = useState(initialState);
    // const [formErrors,setformErrors] = useState({});
    // const [isSubmit,setisSubmit] = useState(false);


    const clearState = () => {
        setData({ ...initialState });
    };

    function changeHandler(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    function formValidator(values) {
        const error = {};
        if (!values.email) {
            error.email = 'email is required';
        }
        return error;
    }
    function submitForm(e) {
        e.preventDefault();
        axios.post(url + 'api/saveEmail', data).then(res => {
            clearState();
            swal({
                title: "Thank you!",
                text: "Thanks for joining Taro, we'll be back to you soon with our new exciting new features!",
                className: 'subscribed-modal'
            });
        })
    }

    return (
        <>
            <footer className='site-footer'>
                <div className='container-fluid container-taro'>
                    <div className='sf-content'>
                        <img src="frontend/images/counters-white.svg" alt="" />
                        <h2><span className='d-none d-sm-inline-block'>Anywhere, Anytime:</span> Pay in Four</h2>
                        <p>Split purchases into four equal payments over three months with <span className='text-white'>Pakistan's first licensed</span> and Shariah friendly  <span className='text-white'>BNPL provider</span></p>
                        <div className="sf-img">
                            {/* <picture>
                                <source media="(min-width:992px)" srcSet="frontend/images/taro/app-footer.svg" />
                                <source media="(min-width:576px)" srcSet="frontend/images/footer-img-tablet.svg" />
                                <img src="frontend/images/footer-img-mobile.svg" alt="" />
                            </picture> */}

                            <img src="frontend/images/taro/footer_lates.png" alt="" />
                        </div>
                        <div className='subscribe-widget'>
                            <h6>Subscribe to get early access</h6>
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
                    <div className='sf-copyrights'>
                        <img src="frontend/images/copy_right.svg" alt="" />
                        <p>&copy; {(new Date().getFullYear())} Taro. All rights reserved</p>
                    </div>
                    <img src="frontend/images/footer-circles.svg" alt="" className='circles-shape' />
                </div>


            </footer>



        </>
    )
}

export default Footer;


