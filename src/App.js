import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Nav, Navbar, Button} from 'react-bootstrap'
import './App.css';
import { useState } from 'react';

// css를 제공해주는 사이트 : bootstrap
// npm install react-bootstrap bootstrap

//자바스크립트 파일은 확장자명을 생략 (.js 써도 안써도 됨)
//다른 자바스크립트에서 export 한건 import로 가져와서 사용 (변수처럼 사용)
import data from './data'
import {num1, num2, num3} from './data.js'

//이미지를 사용하려면  import
import mainBG from './배너.jpg';  //이미지 import


function App() {

  let [items, setItems] = useState(data);  //data는 변수니깐 state로
  let [photo, setphoto] = useState(['/아이쉐도우.jpg', '/립스틱.jpg', '/브러쉬.jpg']);  //useState import


  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src = '/horse.png' width='120px' height = '50px' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상세페이지</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className = {'main-bg'}>

      </div>

      <Container>
        <Row>
          {/* data개수와 image가 바뀔 수 있으니까 useState 처리
          data : 변수 (사용자 입력 또는 서버로부터 데이터를 받았을 때 변경이 되어도 화면은 안바귐 ==> useState로 변경)
            map을 통해서 useState(data)만큼 반복 */}
          {items.map((item, idx) => (
            <ItemCol key={idx} data={item} img={photo[idx]} />
          ))}
          {/* <ItemCol data = {items[0]} img = {photo[0]}/>
          <ItemCol data = {items[1]} img = {photo[1]}/>
          <ItemCol data = {items[2]} img = {photo[2]}/> */}
s
        </Row>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Container>

      {/* <div style = {{backgroundImage:`url(${mainBG})`, height:'350px', width:'100%', backgroundSize:'cover', backgroundPosition:'center'}}>
      </div>
      아니면  `url(/logo192.png)`*/}

      <br/>
      <Button variant="primary">Buy Now</Button>{' '}
    </div>
  );
}

export default App;


//컴포넌트는 맨 앞글자는 대문자
//return에 html(jsx)코드
//컴포넌트로 분리를 했으면 props로 받아와야 하는 부분을 변경
function ItemCol(Props)
{
  //사용하는 곳에서 결정해줘야 하는 부분(그때그때 바뀌어야 하는 부분)만 props 처리
  return(
    <>
      <Col>
            <img src = {Props.img} width={'300px'} height={'200px'} />
            <h4>{Props.data.title}</h4>
            <p>{Props.data.price} 원</p>
          </Col>
    </>
  )
}