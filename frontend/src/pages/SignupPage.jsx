import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import axios from "axios";

function Signup() {

    // const navigate = useNavigate();
    // const [display, setDisplay] = useState('none');
    //
    // useEffect(() => {
    //     document.getElementById('danger_label').style.display = display;
    // }, [display]);
    //
    // const click_signup_button = (e) => {
    //     e.preventDefault();
    //
    //     const formData = new FormData(e.target);
    //     const nickname = formData.get('nickname');
    //     const password = formData.get('password');
    //     const password_confirm = formData.get('password_confirm');
    //     const email = formData.get('email');
    //
    //
    //     if (!nickname) {
    //         set_danger_message("닉네임을 입력해주세요.");
    //         document.getElementById('user_nickname').focus();
    //         return false;
    //     }
    //
    //     if (!email) {
    //         set_danger_message("이메일을 입력해주세요.");
    //         document.getElementById('user_email').focus();
    //         return false;
    //     }
    //
    //     if (!password) {
    //         set_danger_message("비밀번호를 입력해주세요.");
    //         document.getElementById('user_pw').focus();
    //         return false;
    //     }
    //
    //     if (!password_confirm) {
    //         set_danger_message("비밀번호 확인을 입력해주세요.");
    //         document.getElementById('user_confirm_pw').focus();
    //         return false;
    //     }
    //
    //     if (password !== password_confirm) {
    //         set_danger_message("비밀번호를 확인해주세요.");
    //         document.getElementById('user_confirm_pw').focus();
    //         return false;
    //     }
    //
    //     let signup_url = import.meta.env.VITE_BACKEND_URL + '/user/signup';
    //     axios.post(signup_url, formData, {
    //         withCredentials: true
    //     })
    //         .then(res => {
    //             navigate('/');
    //         })
    //         .catch(err => {
    //             if (err.response.data.name === 'SignedUserException') {
    //                 set_danger_message(err.response.data.message);
    //             }
    //         });
    // }
    //
    // const set_danger_message = (message) => {
    //     setDisplay('block');
    //     const danger_label = document.getElementById('danger_label')
    //     danger_label.textContent = message;
    // }
    //
    // const click_login_button = () => {
    //     navigate('/signin');
    // }

    return (
        <>
            <main className={"flex justify-center sm:items-center h-screen"}>
                <div className={"flex flex-col gap-4 w-full sm:max-w-lg p-2"}>
                    <Link to="/" className="flex justify-center">
                        <img className={"h-12 w-auto"} src="/logo/esjjh.png" alt=""/>
                    </Link>
                    <form action="" className={"flex flex-col gap-4"}>
                        <div className={"flex"}>
                            <label htmlFor="nickname" className={"min-w-1/4"}>닉네임 : </label>
                            <input type="text" name="nickname" id="" placeholder={"닉네임"} className={"w-full border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                        </div>
                        <div className={"flex"}>
                            <label htmlFor="email" className={"min-w-1/4"}>이메일 : </label>
                            <input type="email" name="email" id="" placeholder={"이메일"} className={"w-full border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                        </div>
                        <div className={"flex"}>
                            <label htmlFor="password" className={"min-w-1/4"}>비밀번호 확인: </label>
                            <input type="password" name="" id="" className={"w-full border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                        </div>
                        <div className={"flex"}>
                            <label htmlFor="password_confirm" className={"min-w-1/4"}>비밀번호 : </label>
                            <input type="password" name="password_confirm" id="" className={"w-full border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                        </div>
                        <button type="submit" className={"min-h-8 bg-rose-200 hover:cursor-pointer rounded"}>회원 가입</button>
                    </form>
                </div>
            </main>
            {/*<Container className="vh-100 p-0 bg-light d-flex justify-content-center align-items-md-center" fluid>*/}
            {/*    <Col*/}
            {/*        className="border p-4 bg-body shadow-sm text-center d-flex flex-column justify-content-center align-items-center"*/}
            {/*        xs={12} lg={5} xl={4}>*/}
            {/*        <Container fluid>*/}
            {/*            <Image src='/logo/esjjh.png' width={250}/>*/}
            {/*            <Form className="mt-3" id="signupForm" onSubmit={click_signup_button}>*/}

            {/*                <FloatingLabel className="mb-3" controlId="user_nickname"  label="닉네임">*/}
            {/*                    <Form.Control type="text" placeholder="nickname" name="nickname"></Form.Control>*/}
            {/*                </FloatingLabel>*/}

            {/*                <FloatingLabel className="mb-3" controlId="user_email" label="이메일">*/}
            {/*                    <Form.Control type="email" placeholder="email" name="email"></Form.Control>*/}
            {/*                </FloatingLabel>*/}

            {/*                <FloatingLabel className="mb-3" controlId="user_pw" label="비밀번호">*/}
            {/*                    <Form.Control type="password" placeholder="password" name="password"></Form.Control>*/}
            {/*                </FloatingLabel>*/}

            {/*                <FloatingLabel className="mb-3" controlId="user_confirm_pw" label="비밀번호 확인">*/}
            {/*                    <Form.Control type="password" placeholder="password" name="password_confirm"></Form.Control>*/}
            {/*                </FloatingLabel>*/}


            {/*                <div className="d-grid text-start">*/}
            {/*                    <Button className="mb-3" variant="primary" size="lg" type="submit">회원 가입</Button>*/}
            {/*                    <Form.Label className="text-start text-danger" id="danger_label"></Form.Label>*/}
            {/*                </div>*/}

            {/*                <hr/>*/}

            {/*                <Row>*/}
            {/*                    <div className="text-start">*/}
            {/*                        <Button className="link-secondary link-underline link-underline-opacity-0"*/}
            {/*                                variant="link" onClick={click_login_button}>로그인</Button>*/}
            {/*                    </div>*/}
            {/*                </Row>*/}
            {/*            </Form>*/}
            {/*        </Container>*/}
            {/*    </Col>*/}
            {/*</Container>*/}
        </>
    )
}

export default Signup;