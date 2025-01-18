import { Container, Col, Row, Image, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import Banner from './Banner';

function App() {

  let pictures = []
  pictures.push('KakaoTalk_20250105_075627787.jpg')
  pictures.push('KakaoTalk_20250105_075627787_01.jpg')
  pictures.push('KakaoTalk_20250105_075627787_02.jpg')
  pictures.push('KakaoTalk_20250105_075627787_03.jpg')
  pictures.push('KakaoTalk_20250105_075627787_04.jpg')
  pictures.push('KakaoTalk_20250105_075627787_05.jpg')
  pictures.push('KakaoTalk_20250105_075627787_06.jpg')
  pictures.push('KakaoTalk_20250105_075627787_07.jpg')
  pictures.push('KakaoTalk_20250105_075627787_08.jpg')
  pictures.push('KakaoTalk_20250105_075627787_09.jpg')
  pictures.push('KakaoTalk_20250105_075627787_10.jpg')
  pictures.push('KakaoTalk_20250105_075627787_11.jpg')
  pictures.push('KakaoTalk_20250105_075627787_12.jpg')
  pictures.push('KakaoTalk_20250105_075627787_13.jpg')
  pictures.push('KakaoTalk_20250105_075627787_14.jpg')
  pictures.push('KakaoTalk_20250105_075627787_15.jpg')
  pictures.push('KakaoTalk_20250105_075627787_16.jpg')
  pictures.push('KakaoTalk_20250105_075627787_17.jpg')
  pictures.push('KakaoTalk_20250105_075627787_18.jpg')
  pictures.push('KakaoTalk_20250105_075627787_19.jpg')
  pictures.push('KakaoTalk_20250105_075627787_20.jpg')
  pictures.push('KakaoTalk_20250105_075627787_21.jpg')
  pictures.push('KakaoTalk_20250105_075627787_22.jpg')
  pictures.push('KakaoTalk_20250105_075627787_23.jpg')
  pictures.push('KakaoTalk_20250105_075627787_24.jpg')
  pictures.push('KakaoTalk_20250105_075627787_25.jpg')
  pictures.push('KakaoTalk_20250105_075627787_26.jpg')
  pictures.push('KakaoTalk_20250105_075627787_27.jpg')
  pictures.push('KakaoTalk_20250105_075627787_28.jpg')
  pictures.push('KakaoTalk_20250105_075715456.jpg')
  pictures.push('KakaoTalk_20250105_075715456_01.jpg')
  pictures.push('KakaoTalk_20250105_075715456_02.jpg')
  pictures.push('KakaoTalk_20250105_075715456_03.jpg')
  pictures.push('KakaoTalk_20250105_075715456_04.jpg')
  pictures.push('KakaoTalk_20250105_075715456_05.jpg')
  pictures.push('KakaoTalk_20250105_075715456_06.jpg')
  pictures.push('KakaoTalk_20250105_075715456_07.jpg')
  pictures.push('KakaoTalk_20250105_075715456_08.jpg')
  pictures.push('KakaoTalk_20250105_075715456_09.jpg')
  pictures.push('KakaoTalk_20250105_075715456_10.jpg')
  pictures.push('KakaoTalk_20250105_075715456_11.jpg')
  pictures.push('KakaoTalk_20250105_075715456_12.jpg')
  pictures.push('KakaoTalk_20250105_075715456_13.jpg')
  pictures.push('KakaoTalk_20250105_075715456_14.jpg')
  pictures.push('KakaoTalk_20250105_075715456_15.jpg')
  pictures.push('KakaoTalk_20250105_075715456_16.jpg')
  pictures.push('KakaoTalk_20250105_075715456_17.jpg')
  pictures.push('KakaoTalk_20250105_075715456_18.jpg')
  pictures.push('KakaoTalk_20250105_075715456_19.jpg')
  pictures.push('KakaoTalk_20250105_075715456_20.jpg')
  pictures.push('KakaoTalk_20250105_075715456_21.jpg')
  pictures.push('KakaoTalk_20250105_075715456_22.jpg')
  pictures.push('KakaoTalk_20250105_075715456_23.jpg')
  pictures.push('KakaoTalk_20250105_075715456_24.jpg')
  pictures.push('KakaoTalk_20250105_075715456_25.jpg')
  pictures.push('KakaoTalk_20250105_075715456_26.jpg')
  pictures.push('KakaoTalk_20250105_075715456_27.jpg')
  pictures.push('KakaoTalk_20250105_075715456_28.jpg')
  pictures.push('KakaoTalk_20250105_075715456_29.jpg')
  pictures.push('KakaoTalk_20250105_091914357.jpg')
  pictures.push('KakaoTalk_20250105_091914357_01.jpg')
  pictures.push('KakaoTalk_20250105_091914357_02.jpg')
  pictures.push('KakaoTalk_20250105_091914357_03.jpg')
  pictures.push('KakaoTalk_20250105_091914357_04.jpg')
  pictures.push('KakaoTalk_20250105_091914357_05.jpg')
  pictures.push('KakaoTalk_20250105_091914357_06.jpg')
  pictures.push('KakaoTalk_20250105_091914357_07.jpg')
  pictures.push('KakaoTalk_20250105_091914357_08.jpg')
  pictures.push('KakaoTalk_20250105_091914357_09.jpg')
  pictures.push('KakaoTalk_20250105_091914357_10.jpg')

  const chunkedPictures = [];
  for (let i = 0; i < pictures.length; i += 4) {
    chunkedPictures.push(pictures.slice(i, i + 4)); // 4개씩 자르기
  }

  return (
    <>
    <Container fluid>
      <Row>
        <Col lg={2} className='p-0 m-0 border-secondary-subtle border-1 border-end'>
          <Container className='sticky-top'>
            <Row>
              <Col className='p-2 m-2'>
                <a href="#" className=''><Image src='/logo/esjjh.png' width={150}></Image></a>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col lg={10} className='p-0 m-0'>
          <Container className='bg-body-secondary' fluid>
            <Container>
              {chunkedPictures.map((chunk, index) => (
                <Row key={index}>
                  {chunk.map((picture, pictureIndex) => (
                    <Col sm={6} lg={3} key={pictureIndex}>
                      <div className='ratio ratio-1x1 my-2 shadow'>
                        <Image src={`/picture/${picture}`} fluid thumbnail></Image>
                      </div>
                    </Col>
                  ))}
                </Row>
              ))}
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
