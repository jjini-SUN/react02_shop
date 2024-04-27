import {Button, Col, Container, Row} from 'react-bootstrap';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DetailPage(props) {
  //컴포넌트는 return으로 화면을 그린다(jsx)
  //URL 파라미터를 useParams()로 받는다 (상세페이지의 id번호) 0, 1, 2
  let {id} = useParams()  //URL파라미터 가져오기
  //items배열 중에서 선택된 아이템인지 식별 (item의 id와 URL파라미터 id가 같은지 검사)
  let selectedItem = props.items.find((e)=>{
    //items의 id와 URL 파라미터의 id가 같은지 검사 
    return e.id == id
  })

  let [hideDom, setHideDom] = useState(false);

  //useEffect : 오래 걸리는 작업을 처리할 때
  //리액트의 컴포넌트 라이프사이클 (생성될 때, 갱신될 때, 없어질 때) :각 라이프사이클마다 코드를 실행
  //mount : 생성될 때, update : 갱신될 때, unmount : 없어질 때
  useEffect(()=>{
    //mount와 update 시에 실행될 코드
    //html을 먼저 보여주고 오래 걸리는 작업을 처리 (서버요청 등...)
    console.log('mount 첫실행')

    setTimeout(()=>{
      //2초 후에 동작할 코드
      setHideDom(true)
    }, 2000)

    //unmount에 대해서는 return에 작성
    return(()=>{
      console.log('unmount 삭제될 때')
    })
  })
  return (
    <>
      <Container>
        {
          hideDom === false? (
            <div>hello</div>
          )
          : null
        }
        <Row>
          <Col>
            <img src = {props.img[selectedItem.id]} width='500px' height='300px'/>
          </Col>

          <Col>

            <h4>{selectedItem.title}</h4>
            <p>{selectedItem.content}</p>
            <p>{selectedItem.price}</p>
            <Button>주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
