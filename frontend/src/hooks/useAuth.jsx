import {useEffect, useState} from "react";
import {Cookies} from "react-cookie";
import axios from "axios";

const useAuth = () => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const cookies = new Cookies();

        let get_user_url = import.meta.env.VITE_BACKEND_URL + '/auth';
        axios.post(get_user_url, {}, {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${cookies.get('access_token')}`
            },
        }).then(res => {
            setAuth(res.data);
        });

    }, []);

    return auth;
}

export default useAuth;