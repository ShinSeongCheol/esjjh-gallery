import { Container, Row, Col, Form, Image, FloatingLabel, Button} from "react-bootstrap";

function Signin() {
    return(
        <>
            <Container className="vh-100 bg-light" fluid>
                <Row className="h-100 d-flex justify-content-center align-items-center">
                    <Col className="border p-4 bg-body shadow-sm text-center" xs={10} sm={8} md={{ span:6 }} lg={{span:5}} xl={{span:4}}>
                        <Image src='/logo/esjjh.png' width={250}/>
                        <Form className="mt-3">
                            <Row className="mb-3">
                                <FloatingLabel className="" controlId="floatingInput" label="아이디">
                                    <Form.Control type="text" placeholder="id"></Form.Control>
                                </FloatingLabel>
                            </Row>

                            <Row className="mb-3">
                                <FloatingLabel className="" controlId="floatingPassword" label="비밀번호">
                                    <Form.Control type="password" placeholder="password"></Form.Control>
                                </FloatingLabel>
                            </Row>
                            
                        </Form>
                        <Row>
                            <div className="d-grid">
                                <Button variant="primary" size="lg">로그인</Button>
                            </div>
                        </Row>
                        <hr />
                        <Row>
                            <div className="d-grid">
                                <Button variant="link"><Image src={'/button/kakao_login_medium_wide.png'}></Image></Button>
                            </div>
                        </Row>
                        <Row>
                            <div className="text-start">
                                <Button className="link-secondary link-underline link-underline-opacity-0" variant="link">회원가입</Button>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Signin;