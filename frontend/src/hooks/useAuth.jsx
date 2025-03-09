import {useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";

const useAuth = () => {
    const [auth, setAuth] = useState();

    useEffect(() => {

        let get_auth_url = import.meta.env.VITE_BACKEND_URL + '/auth';
        axios.post(get_auth_url, {}, {
            withCredentials: true
        }).then(res => {
            setAuth(res.data);
        }).catch(err => {
            // 토큰 만료 예외처리
            if (err.response.status === 419 && err.response.data.name === 'TokenExpiredError') {
                let refresh_auth_url = import.meta.env.VITE_BACKEND_URL + '/auth/refresh';
                axios.post(refresh_auth_url, {}, {withCredentials: true}).then(res => {
                    setAuth(res.data);
                }).catch(err => {
                    console.error(err);
                })
            }
        });

    }, []);

    return auth;
}

export default useAuth;