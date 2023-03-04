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

            <div className="container py-4">

                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-bg-dark rounded-3">

                            <form onSubmit={Submit} className="needs-validation" novalidate>

                                <label for="email" className="form-label">Email</label>
                                <div className="input-group has-validation">
                                    {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                                    <input type="email" className="form-control" id="email" value={email} aria-describedby="inputGroupPrepend" required
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <div className="invalid-feedback">
                                        Please write your email.
                                    </div>
                                </div>

                                <label for="message" className="form-label">Message</label>
                                <textarea type="text" className="form-control" id="message" value={message} required
                                    onChange={(e) => setMessage(e.target.value)} />
                                <div className="invalid-feedback">
                                    Please provide a message.
                                </div>

                                <div className="col-12 mt-2">
                                    {/* <button className="btn btn-primary" type="submit">Submit form</button> */}
                                    <button type="submit" className="btn btn-light"
                                        // data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >Send 📨</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-light border rounded-3">
                            {contact.map(item =>

                                <div className="c.col-sm-6 .col-md-5 .col-lg-6">
                                    <ul className="nav col-md-8 d-block">
                                        <li className="ms-1"><a className="text-muted" href="#"><img src={mail} width="30" height="24" alt="Twitter" />{item.email}</a></li>
                                        <li className="ms-1"><a className="text-muted" href="#"><img src={phone} width="30" height="24" alt="Twitter" />{item.phone}</a></li>
                                        <li className="ms-1"><a className="text-muted" href="#"><img src={map} width="30" height="24" alt="Twitter" />{item.map}</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


            </div>

            <div className="modal fade modal-wrap display-none" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thank you!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Contact successful, we'll be in touch!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Contact;
