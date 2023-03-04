import mail from '../images/mail.svg'
import phone from '../images/phone.svg'
import map from '../images/map.svg'
import { contact } from '../assets/contact'

import { collection, addDoc, getFirestore } from "firebase/firestore";
import FirebaseDb from '../firebase/firebase.js';
import { useState } from 'react';

const Contact = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const db = getFirestore(FirebaseDb);
    const dbRef = collection(db, "contacts");
    const data = {
        email: email,
        message: message
    }

    const Submit = (e) => {
        e.preventDefault();

        addDoc(dbRef, data)
            .then((docRef) => {
                console.log("Document added successfully");
            })
            .catch(error => {
                console.log(error);
            })  
    }

    return (
        <div>

            <div className="row justify-content-evenly">
                <div className="container">
                    {/* <form onSubmit={Submit}>
                        
                        <div className="col-4">
                            <div className="c.col-sm-6 .col-md-5 .col-lg-6">

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>

                                    <input type="email" className="form-control" id="email" value={email} placeholder="name@example.com"
                                        onChange={(e) => setEmail(e.target.value)} ></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>

                                    <textarea className="form-control" id="message" value={message} rows="3"
                                        onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" >Send 📨</button>

                            </div>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" open={open} >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thank you!</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Contact successful, we'll be in touch!
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> */}


                    <form onSubmit={Submit} class="needs-validation" novalidate>


                        <div class="col-4">
                            <label for="email" class="form-label">Email</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="email" class="form-control" id="email" value={email} aria-describedby="inputGroupPrepend" required
                                    onChange={(e) => setEmail(e.target.value)} />
                                <div class="invalid-feedback">
                                    Please write your email.
                                </div>
                            </div>
                        </div>


                        <div class="col-md-4">
                            <label for="message" class="form-label">Message</label>

                            <textarea type="text" class="form-control" id="message" value={message} required
                                onChange={(e) => setMessage(e.target.value)} />
                            <div class="invalid-feedback">
                                Please provide a message.
                            </div>
                        </div>



                        <div class="col-12">
                            {/* <button class="btn btn-primary" type="submit">Submit form</button> */}
                            <button type="submit" className="btn btn-dark" 
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal" 
                            >Send 📨</button>
                        </div>
                    </form>



                    <div className="modal fade modal-wrap display-none" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" 
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thank you!</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Contact successful, we'll be in touch!
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>


                    {contact.map(item =>

                        <div className="col-4">
                            <div className="c.col-sm-6 .col-md-5 .col-lg-6">
                                <ul className="nav col-md-10 d-flex">
                                    <li className="ms-1"><a className="text-muted" href="#"><img src={mail} width="30" height="24" alt="Twitter" />{item.email}</a></li>
                                    <li className="ms-1"><a className="text-muted" href="#"><img src={phone} width="30" height="24" alt="Twitter" />{item.phone}</a></li>
                                    <li className="ms-1"><a className="text-muted" href="#"><img src={map} width="30" height="24" alt="Twitter" />{item.map}</a></li>
                                </ul>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
};

export default Contact;
