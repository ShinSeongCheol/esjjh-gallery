import { Container, Row, Col, Form, Image, FloatingLabel, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const click_login_button = () => {
        navigate('/signin');
    }

    return(
        <>
            <Container className="vh-100 p-0 bg-light d-flex justify-content-center align-items-md-center" fluid>
                <Col className="border p-4 bg-body shadow-sm text-center d-flex flex-column justify-content-center align-items-center" xs={12} lg={5} xl={4}>
                    <Container fluid>
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
                                <Button variant="primary" size="lg">회원 가입</Button>
                            </div>
                        </Row>

                        <hr />

                        <Row>
                            <div className="text-start">
                                <Button className="link-secondary link-underline link-underline-opacity-0" variant="link" onClick={click_login_button}>로그인</Button>
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Container>
        </>
    )
}

export default Signup;