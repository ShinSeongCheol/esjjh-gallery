import { Container, Navbar, Image, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import {useEffect} from "react";
import {Cookies} from "react-cookie";
import axios from "axios";
import useAuth from "../hooks/useAuth.jsx";

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    console.log(auth);

    const signupButtonClick = () => {
        navigate('/signin');
    }


    return(
        <Navbar bg="white" data-bs-theme="white" className='shadow-sm sticky-top'>
            <Container>
                <Navbar.Brand href={location.pathname == '/' ? '#' : '/'}>
                    <Image src='/logo/esjjh.png' width={150}/>
                </Navbar.Brand>

                {auth.id ?(
                    <Button className='primary' variant='primary'  onClick={signupButtonClick}>
                        글쓰기
                    </Button>
                ):(
                    <Button className='primary' variant='primary'  onClick={signupButtonClick}>
                        로그인
                    </Button>
                )}
            </Container>
        </Navbar>
    )
}

export default Nav;