import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import './App.css';
// css를 제공해주는 사이트 : bootstrap
// npm install react-bootstrap bootstrap

//자바스크립트 파일은 확장자명을 생략 (.js 써도 안써도 됨)
//다른 자바스크립트에서 export 한건 import로 가져와서 사용 (변수처럼 사용)
import data from './data'
import {num1, num2, num3} from './data.js'

function App() {

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{data}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{num1}</Nav.Link>
            <Nav.Link href="#features">{num2}</Nav.Link>
            <Nav.Link href="#pricing">{num3}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br/>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
