import mail from '../images/mail.svg'
import phone from '../images/phone.svg'
import map from '../images/map.svg'
import { contact } from '../assets/contact'

const Contact = () => {
    return (
        <div>
            <div className="container">

                <div className="row justify-content-evenly">
                    <div className="col-4">
                        <div className="c.col-sm-6 .col-md-5 .col-lg-6">

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-dark">Send 📨</button>
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
