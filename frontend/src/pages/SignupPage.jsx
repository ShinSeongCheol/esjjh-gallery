import {Container, Row, Col, Form, Image, FloatingLabel, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import axios from "axios";

function Signup() {

    const navigate = useNavigate();
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        document.getElementById('danger_label').style.display = display;
    }, [display]);

    const click_signup_button = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const nickname = formData.get('nickname');
        const password = formData.get('password');
        const password_confirm = formData.get('password_confirm');
        const email = formData.get('email');


        if (!nickname) {
            set_danger_message("닉네임을 입력해주세요.");
            document.getElementById('user_nickname').focus();
            return false;
        }

        if (!email) {
            set_danger_message("이메일을 입력해주세요.");
            document.getElementById('user_email').focus();
            return false;
        }

        if (!password) {
            set_danger_message("비밀번호를 입력해주세요.");
            document.getElementById('user_pw').focus();
            return false;
        }

        if (!password_confirm) {
            set_danger_message("비밀번호 확인을 입력해주세요.");
            document.getElementById('user_confirm_pw').focus();
            return false;
        }

        if (password !== password_confirm) {
            set_danger_message("비밀번호를 확인해주세요.");
            document.getElementById('user_confirm_pw').focus();
            return false;
        }

        let signup_url = import.meta.env.VITE_BACKEND_URL + '/user/signup';
        axios.post(signup_url, formData, {
            withCredentials: true
        })
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                if (err.response.data.name === 'SignedUserException') {
                    set_danger_message(err.response.data.message);
                }
            });
    }

    const set_danger_message = (message) => {
        setDisplay('block');
        const danger_label = document.getElementById('danger_label')
        danger_label.textContent = message;
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

                            <FloatingLabel className="mb-3" controlId="user_nickname"  label="닉네임">
                                <Form.Control type="text" placeholder="nickname" name="nickname"></Form.Control>
                            </FloatingLabel>

                            <FloatingLabel className="mb-3" controlId="user_email" label="이메일">
                                <Form.Control type="email" placeholder="email" name="email"></Form.Control>
                            </FloatingLabel>

                            <FloatingLabel className="mb-3" controlId="user_pw" label="비밀번호">
                                <Form.Control type="password" placeholder="password" name="password"></Form.Control>
                            </FloatingLabel>

                            <FloatingLabel className="mb-3" controlId="user_confirm_pw" label="비밀번호 확인">
                                <Form.Control type="password" placeholder="password" name="password_confirm"></Form.Control>
                            </FloatingLabel>


                            <div className="d-grid text-start">
                                <Button className="mb-3" variant="primary" size="lg" type="submit">회원 가입</Button>
                                <Form.Label className="text-start text-danger" id="danger_label"></Form.Label>
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