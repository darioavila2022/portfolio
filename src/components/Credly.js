import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const badges = [
  {
    url: "https://www.credly.com/earner/earned/badge/c88be35e-0ff3-400c-9334-d5fc71c196f0",
    img: "https://images.credly.com/size/680x680/images/791d0469-ca15-4bc9-b9b3-2b8dca821b62/image.png"
  },
  {
    url: "https://www.credly.com/earner/earned/badge/7b2f7d25-2374-437d-9d82-be3d6be17d45",
    img: "https://images.credly.com/size/680x680/images/71ed1274-3d7c-40f4-9194-e464643719e3/image.png"
  },
  {
    url: "https://www.credly.com/earner/earned/badge/1e7ec250-5576-4b8a-9405-dcbbcb98dbf5",
    img: "https://images.credly.com/size/680x680/images/50a7358c-80d1-4a5d-a1d7-a9e0997de2be/image.png"
  },
  {
    url: "https://www.credly.com/earner/earned/badge/1e7ec250-5576-4b8a-9405-dcbbcb98dbf5",
    img: "https://images.credly.com/size/680x680/images/50a7358c-80d1-4a5d-a1d7-a9e0997de2be/image.png"
  }
]

function Credly() {
  return (
    <Container>
      <Row md={4} className="g-1">
        <Col>
          <Link to={badges[0].url} >
            <img src={badges[0].img} height="40" className="badgeurl"></img>
          </Link>
        </Col>

        <Col>
          <Link to={badges[1].url} >
            <img src={badges[1].img} height="40" className="badgeurl"></img>
          </Link>
        </Col>
        <Col>
          <Link to={badges[2].url} className="badgeurl">
            <img src={badges[2].img} height="40" className="badgeurl"></img>
          </Link>
        </Col>
        <Col>
          <Link to={badges[3].url} className="badgeurl">
            <img src={badges[3].img} height="40" className="badgeurl"></img>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Credly;