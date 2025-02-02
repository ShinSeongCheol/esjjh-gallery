import { Container, Navbar, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();

    const signupButtonClick = () => {
        navigate('/signin');
        // let kakao_login_url = import.meta.env.VITE_BACKEND_URL + '/kakao/login'; 
        // window.open(kakao_login_url, "_parent");
    }

    return(
        <Navbar bg="white" data-bs-theme="white" className='shadow-sm sticky-top'>
            <Container>
                <Navbar.Brand href={location.pathname == '/' ? '#' : '/'}>
                    <Image src='/logo/esjjh.png' width={150}/>
                </Navbar.Brand>
                
                <button className='btn btn-outline-primary' onClick={signupButtonClick}>
                    로그인
                    {/* <Image src={'/button/kakao_login_small.png'}></Image> */}
                </button>
            </Container>
        </Navbar>
    )
}

export default Nav;