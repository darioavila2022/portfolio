import mail from '../images/mail.svg'
import phone from '../images/phone.svg'
import map from '../images/map.svg'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import FirebaseDb from '../firebase/firebase.js';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { contact } from '../data/contact'

function Contact() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                handleShow()
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container>
            <Row xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }} lg={{ cols: 2 }}>
                <Col>
                    <div className="h-100 p-5 text-bg-dark rounded-3">
                        <form onSubmit={Submit} className="needs-validation" novalidate>
                            <label for="email" className="form-label">Email</label>
                            <div className="input-group has-validation">
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
                                <button type="submit" className="btn btn-light"
                                    // data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >Send 📨</button>
                            </div>
                        </form>
                    </div>
                </Col>
                <div className="p-5 bg-light border rounded-3">
                    {contact.map(item =>
                        <ListGroup>
                            <ListGroup.Item><img src={mail} width="30" height="28" className="mx-2" alt="email" />{item.email} </ListGroup.Item>
                            <ListGroup.Item><img src={phone} width="30" height="28" className="mx-2" alt="phone" />{item.phone}</ListGroup.Item>
                            <ListGroup.Item><img src={map} width="30" height="28" className="mx-2" alt="map" />{item.map}</ListGroup.Item>
                        </ListGroup>
                    )}
                </div>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank you for your message, we'll be in touch soon.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Contact;
