import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../components/Header.jsx";

function Signin() {

    const navigate = useNavigate();

    const click_signup_button = () => {
        navigate('/signup');
    }

    const click_kakao_button = () => {
        let kakao_login_url = import.meta.env.VITE_BACKEND_URL + '/kakao/login';
        window.open(kakao_login_url, "_parent");
    }

    const click_signin_button = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email) {
            alert("이메일을 입력해주세요.");
            document.getElementById('email').focus();
            return false;
        }

        if (!password) {
            alert("비밀번호를 입력해주세요.");
            document.getElementById('password').focus();
            return false;
        }

        let signup_url = import.meta.env.VITE_BACKEND_URL + '/user/signin';
        axios.post(signup_url, formData, {
            withCredentials: true
        })
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                if (err.response.data.name === 'SignedUserException') {
                    alert(err.response.data.message);
                }
            });
    }

    return(
        <>
            <main className={"flex flex-col justify-center items-center h-screen"}>
                <div className={"w-full sm:max-w-lg h-full"}>
                    <div className={"flex flex-col h-full p-2"}>
                        <form action="" className={"flex flex-col h-full"} onSubmit={click_signin_button}>
                            <div className={"flex flex-col sm:justify-end gap-4 sm:grow mb-4"}>
                                <Link to="/" className="flex justify-center">
                                    <img className={"h-12 w-auto"} src="/logo/esjjh.png" alt=""/>
                                </Link>
                                <input type="email" name="email" id="email" placeholder={"이메일"} className={"min-h-8 border-b-2 border-gray-300 focus:outline-none focus:border-black"} />
                                <input type="password" name="password" id="password" placeholder={"비밀번호"} className={"min-h-8 border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                                <button type="submit" className={"min-h-8 bg-rose-200 hover:cursor-pointer rounded"}>로그인</button>
                            </div>

                            <hr/>

                            <div className={"flex flex-col gap-4 grow mt-4"} onClick={click_signup_button} >
                                <div className={"flex gap-2 justify-center items-center bg-[#fee500] rounded  hover:cursor-pointer"}>
                                    <img src="/logo/kakao_logo.png" alt="" className={"text-center h-4"}/>
                                    <button type="button" className={"min-h-8 hover:cursor-pointer"} onClick={click_kakao_button}>카카오 로그인</button>
                                </div>
                                <div className={"flex"}>
                                    <button type="button" className={"text-xs text-gray-600 hover:cursor-pointer"}>회원가입</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Signin;