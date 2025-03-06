import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../components/Header.jsx";

function Signin() {

    // const navigate = useNavigate();
    // const [display, setDisplay] = useState('none');
    //
    // useEffect(() => {
    //     document.getElementById('danger_label').style.display = display;
    // }, [display]);
    //
    // const click_signup_button = () => {
    //     navigate('/signup');
    // }
    //
    // const click_kakao_button = () => {
    //     let kakao_login_url = import.meta.env.VITE_BACKEND_URL + '/kakao/login';
    //     window.open(kakao_login_url, "_parent");
    // }
    //
    // const click_signin_button = (e) => {
    //     e.preventDefault();
    //
    //     const formData = new FormData(e.target);
    //     const email = formData.get('email');
    //     const password = formData.get('password');
    //
    //     if (!email) {
    //         set_danger_message("이메일을 입력해주세요.");
    //         document.getElementById('email').focus();
    //         return false;
    //     }
    //
    //     if (!password) {
    //         set_danger_message("비밀번호를 입력해주세요.");
    //         document.getElementById('password').focus();
    //         return false;
    //     }
    //
    //     let signup_url = import.meta.env.VITE_BACKEND_URL + '/user/signin';
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

    return(
        <>
            <main className={"flex flex-col justify-center items-center h-screen"}>
                <div className={"w-full h-full"}>
                    <div className={"flex flex-col h-full p-2"}>
                        <Link to="/" className="flex justify-center">
                            <img className={"h-12 w-auto"} src="/logo/esjjh.png" alt=""/>
                        </Link>
                        <form action="" className={"flex flex-col h-full"}>
                            <div className={"flex flex-col justify-end gap-4 grow mb-4"}>
                                <input type="email" name="" id="" placeholder={"이메일"} className={"min-h-8 border-b-2 border-gray-300 focus:outline-none focus:border-black"} />
                                <input type="password" name="" id="" placeholder={"비밀번호"} className={"min-h-8 border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                                <button type="submit" className={"min-h-8 bg-rose-200 hover:cursor-pointer rounded"}>로그인</button>
                            </div>

                            <hr/>

                            <div className={"flex flex-col gap-4 grow mt-4"}>
                                <div className={"flex gap-2 justify-center items-center bg-[#fee500] rounded"}>
                                    <img src="/logo/kakao_logo.png" alt="" className={"text-center h-4"}/>
                                    <button type="button" className={"min-h-8 hover:cursor-pointer"}>카카오 로그인</button>
                                </div>
                                <button type="button" className={"flex text-xs text-gray-600 hover:cursor-pointer"}>회원가입</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            {/*<Container className="vh-100 p-0 bg-light d-flex justify-content-center align-items-md-center" fluid>*/}
            {/*    <Col className="border p-4 bg-body shadow-sm text-center d-flex flex-column justify-content-center align-items-center" xs={12} lg={5} xl={4}>*/}
            {/*        <Container fluid>*/}
            {/*            <Image src='/logo/esjjh.png' width={250}/>*/}
            {/*            <Form className="mt-3" onSubmit={click_signin_button}>*/}
            {/*                <Row className="mb-3">*/}
            {/*                    <FloatingLabel className="" controlId="email" label="이메일">*/}
            {/*                        <Form.Control type="email" placeholder="email" name={"email"}></Form.Control>*/}
            {/*                    </FloatingLabel>*/}
            {/*                </Row>*/}

            {/*                <Row className="mb-3">*/}
            {/*                    <FloatingLabel className="" controlId="password" label="비밀번호">*/}
            {/*                        <Form.Control type="password" placeholder="password" name={"password"}></Form.Control>*/}
            {/*                    </FloatingLabel>*/}
            {/*                </Row>*/}

            {/*                <Row>*/}
            {/*                    <div className="d-grid">*/}
            {/*                        <Button variant="primary" size="lg" type="submit">로그인</Button>*/}
            {/*                        <Form.Label className="mt-3 text-start text-danger" id="danger_label"></Form.Label>*/}
            {/*                    </div>*/}
            {/*                </Row>*/}
            {/*            </Form>*/}
            {/*            <hr />*/}
            {/*            <Row>*/}
            {/*                <div className="d-grid">*/}
            {/*                    <Button style={{backgroundColor: "#fee500", fontSize: "16px"}} className="d-flex justify-content-center align-items-center" variant="" onClick={click_kakao_button} size="lg"><Image className="m-1" src={'/logo/kakao_logo.png'} width={20}/>카카오 로그인</Button>*/}
            {/*                </div>*/}
            {/*            </Row>*/}
            {/*            <Row>*/}
            {/*                <div className="text-start">*/}
            {/*                    <Button className="link-secondary link-underline link-underline-opacity-0" variant="link" onClick={click_signup_button}>회원가입</Button>*/}
            {/*                </div>*/}
            {/*            </Row>*/}
            {/*        </Container>*/}
            {/*    </Col>*/}
            {/*</Container>*/}
        </>
    )
}

export default Signin;