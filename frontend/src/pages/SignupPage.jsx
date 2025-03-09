import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import axios from "axios";

function Signup() {

    const navigate = useNavigate();

    const click_signup_button = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const nickname = formData.get('nickname');
        const password = formData.get('password');
        const password_confirm = formData.get('password_confirm');
        const email = formData.get('email');


        if (!nickname) {
            alert("닉네임을 입력해주세요.");
            document.getElementById('nickname').focus();
            return false;
        }

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

        if (!password_confirm) {
            alert("비밀번호 확인을 입력해주세요.");
            document.getElementById('password_confirm').focus();
            return false;
        }

        if (password !== password_confirm) {
            alert("비밀번호를 확인해주세요.");
            document.getElementById('password_confirm').focus();
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
                    alert(err.response.data.message);
                }
            });
    }

    const click_login_button = () => {
        navigate('/signin');
    }

    return (
        <>
            <main className={"flex justify-center sm:items-center h-screen"}>
                <div className={"flex flex-col gap-4 w-full sm:max-w-lg p-2"}>
                    <Link to="/" className="flex justify-center">
                        <img className={"h-12 w-auto"} src="/logo/esjjh.png" alt=""/>
                    </Link>
                    <form action="" className={"flex flex-col gap-4"} onSubmit={click_signup_button}>
                        <div className={"flex"}>
                            <label htmlFor="nickname" className={"min-w-1/4"}>닉네임 : </label>
                            <input type="text" name="nickname" id="nickname" placeholder={"닉네임"} className={"w-full border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                        </div>
                        <div className={"flex"}>
                            <label htmlFor="email" className={"min-w-1/4"}>이메일 : </label>
                            <input type="email" name="email" id="email" placeholder={"이메일"} className={"w-full border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                        </div>
                        <div className={"flex"}>
                            <label htmlFor="password" className={"min-w-1/4"}>비밀번호 : </label>
                            <input type="password" name="password" id="password" className={"w-full border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                        </div>
                        <div className={"flex"}>
                            <label htmlFor="password_confirm" className={"min-w-1/4"}>비밀번호 확인: </label>
                            <input type="password" name="password_confirm" id="password_confirm" className={"w-full border-b-2 border-gray-300 focus:outline-none focus:border-black"}/>
                        </div>
                        <button type="submit" className={"min-h-8 bg-rose-200 hover:cursor-pointer rounded"}>회원 가입</button>
                    </form>
                    <p className={"text-center text-gray-600 text-sm"}>이미 계정이 있으신가요? <span className={"font-bold text-black hover:cursor-pointer"} onClick={click_login_button}>로그인하기</span></p>
                </div>
            </main>
        </>
    )
}

export default Signup;