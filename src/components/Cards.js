import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { cards } from "../data/cards";

function Cards() {
    return (
        <Container className="content">
            <Row xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }} lg={{ cols: 3 }}>
                {cards.map(item =>
                    <Col>
                        <Card className="d-flex mt-4">
                            <Card.Img src={item.img} alt="card"></Card.Img>
                            <Card.Body>
                                <Card.Text className="card-text py-4">{item.desc}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to={`${item.demo}`} className="btn btn-sm btn-outline-dark" role="button">Demo</Link>
                                        <Link to={`${item.repo}`} className="btn btn-sm btn-secondary" role="button">Source Code</Link>
                                    </div>
                                    <small className="text-muted">{item.hash}</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Cards;