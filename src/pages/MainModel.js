/**
 * Created by DELL on 21/01/2022.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,HashRouter,Link, Route} from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

class MainModel extends Component{
    constructor(state) {
        super(state);

        this.dismissModal = this.dismissModal.bind(this);
        this.submitModelForm = this.submitModelForm.bind(this);
        this.email = this.email.bind(this);


        this.state = {
            email:''
        }
    }

    email(event){
        this.setState({
            email:event.target.value
        })
    }
     submitModelForm(e) {
        e.preventDefault();
         const url = '';

        // if(Object.keys(formErrors).length ===0 ){
        axios.post(url + 'api/saveEmail', {
            email:this.state.email
        }).then(res => {
            this.setState({email:""});
           swal({
                title: "Thank you!",
                text: "Thanks for joining Taro, we'll be back to you soon with our new exciting new features!",
                className: 'subscribed-modal'
            });
           // $('#subscribeModal').modal('hide');
        });
        //  }

    };
     dismissModal(e) {
        e.preventDefault();
        //$('#subscribeModal').modal('hide');
    }
    render(){

        return (
            <div className="modal" id="subscribeModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" onClick={this.dismissModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className='subscribe-widget'>
                                <h6>Subscribe to get early access</h6>
                                <form action="" onSubmit={(e) => { this.submitModelForm(e) }}>
                                    <div className='subscribe-widget-form'>
                                        <div className='form-group input-field-wrap' >
                                            <img src="frontend/images/envelope.svg" alt="" className='icon-envelope' />
                                            <input  type="email" required onChange={(e)=>{this.email(e)}} required name="email" defaultValue={this.state.firstName} autoComplete="off" className='form-control' placeholder='Your email address' />
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
                </div>
            </div>
        )
    }
}

export default MainModel;