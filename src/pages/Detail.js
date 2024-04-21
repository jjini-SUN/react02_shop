import {Button, Col, Container, Row} from 'react-bootstrap';
import './Detail.css';

export default function DetailPage(props) {
  //컴포넌트는 return으로 화면을 그린다(jsx)
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src = '/아이쉐도우.jpg' width='500px' height='300px'/>
          </Col>

          <Col>
            <h4>{props.items[0].title}</h4>
            <p>{props.items[0].content}</p>
            <p>{props.items[0].price}</p>
            <Button>주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
