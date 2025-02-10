import {Container, Row, Col, Form, Image, FloatingLabel, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Signup() {

    const navigate = useNavigate();

    const click_signup_button = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        formData.forEach((value, key) => {
            console.log(key, value);
        });

        let signup_url = import.meta.env.VITE_BACKEND_URL + '/user/signup';
        axios.post(signup_url, formData);

    }

    const click_login_button = () => {
        navigate('/signin');
    }

    return (
        <>
            <Container className="vh-100 p-0 bg-light d-flex justify-content-center align-items-md-center" fluid>
                <Col
                    className="border p-4 bg-body shadow-sm text-center d-flex flex-column justify-content-center align-items-center"
                    xs={12} lg={5} xl={4}>
                    <Container fluid>
                        <Image src='/logo/esjjh.png' width={250}/>
                        <Form className="mt-3" id="signupForm" onSubmit={click_signup_button}>

                            <Form.Control className="mb-3" type="file" name="profile_image"></Form.Control>

                            <FloatingLabel className="mb-3" controlId="user_id"  label="아이디">
                                <Form.Control type="text" placeholder="id" name="id"></Form.Control>
                            </FloatingLabel>

                            <FloatingLabel className="mb-3" controlId="user_pw" label="비밀번호">
                                <Form.Control type="password" placeholder="password" name="password"></Form.Control>
                            </FloatingLabel>

                            <FloatingLabel className="mb-3" controlId="user_email" label="이메일">
                                <Form.Control type="email" placeholder="email" name="email"></Form.Control>
                            </FloatingLabel>

                            <div className="d-grid">
                                <Button variant="primary" size="lg" type="submit">회원 가입</Button>
                            </div>

                            <hr/>

                            <Row>
                                <div className="text-start">
                                    <Button className="link-secondary link-underline link-underline-opacity-0"
                                            variant="link" onClick={click_login_button}>로그인</Button>
                                </div>
                            </Row>
                        </Form>
                    </Container>
                </Col>
            </Container>
        </>
    )
}

export default Signup;