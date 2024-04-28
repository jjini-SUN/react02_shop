import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Nav, Navbar, Button} from 'react-bootstrap'
import './App.css';
import {Routes, Route, useNavigate, Outlet, Link} from 'react-router-dom';
import { useState } from 'react';
import DetailPage from './pages/Detail.js';

// css를 제공해주는 사이트 : bootstrap
// npm install react-bootstrap bootstrap

//자바스크립트 파일은 확장자명을 생략 (.js 써도 안써도 됨)
//다른 자바스크립트에서 export 한건 import로 가져와서 사용 (변수처럼 사용)
import data from './data'
import {num1, num2, num3} from './data.js'

//이미지를 사용하려면  import
import mainBG from './배너.jpg';  //이미지 import
import Cart from './pages/Cart.js';

//라우터는 창을 새로 불러오는게 아니라 재렌더링 방식을 사용
function App() {

  let [items, setItems] = useState(data);  //data는 변수니깐 state로 {data => items}
  let [photo, setphoto] = useState(['/아이쉐도우.jpg', '/립스틱.jpg', '/브러쉬.jpg', '/logo192.png']);  //useState import
  let navigate = useNavigate()


  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src = '/horse.png' width='120px' height = '50px' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className={'main-bg'}></div>
            <Container>
              <Row>
                {
                  items.map((e, idx)=>{
                    return (
                      <ItemCol data={e} img={photo[idx]} key={0}></ItemCol>
                    )
                  })
                }
              </Row>
            </Container>
            {/* <Button variant="primary">Buy Now</Button>{' '} */}
          </>
        }></Route>

        {/* id ==> URL 파라미터(변수)를 통해서 상세아이템 변경 */}

        <Route path='/detail/:id' element={<DetailPage items={items} img={photo}/>}></Route>

        <Route path='/about' element={<AboutPage></AboutPage>}>
          <Route path = 'address' element={<div>주소</div>}></Route>
          <Route path = 'location' element={<div>위치</div>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<div>그 외의 페이지</div>}></Route>
      </Routes>

        {/* 리액트는 하나의 html을 다시 그리는 방식이기 때문에 html을 이동하는 <a>태그 보다는 <Link>를 사용</a> */}
      <Link to='/about/address'><Button variant = 'warning'>리액트 부트스트랩 버튼</Button></Link>


      {/* data개수와 image가 바뀔 수 있으니까 useState 처리
      data : 변수 (사용자 입력 또는 서버로부터 데이터를 받았을 때 변경이 되어도 화면은안바귐 ==> useState로 변경)
      map을 통해서 useState(data)만큼 반복 */}

      {/* <ItemCol data = {items[0]} img = {photo[0]}/>
      <ItemCol data = {items[1]} img = {photo[1]}/>
      <ItemCol data = {items[2]} img = {photo[2]}/> */}


      {/* <div style = {{backgroundImage:`url(${mainBG})`, height:'350px', width:'100%', backgroundSize:'cover', backgroundPosition:'center'}}>
      </div>
      아니면  `url(/logo192.png)`*/}
      
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


//어바웃페이지의 컴포넌트
function AboutPage() {
  return(
    <>
    <div>
      <h4>어바웃 페이지</h4>
      <Outlet/>
      {/* Outlet으로 중첩Route 위치를 결정 */}
    </div>
    </>
  )
}