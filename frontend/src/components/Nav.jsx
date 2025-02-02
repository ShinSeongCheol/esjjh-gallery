import { Container, Navbar, Image } from 'react-bootstrap';

function Nav() {
    return(
        <Navbar bg="white" data-bs-theme="white" className='shadow-sm sticky-top'>
            <Container>
            <Navbar.Brand href="#"><Image src='/logo/esjjh.png' width={150}></Image></Navbar.Brand>
            <button className='border border-none' onClick={() => {
                let kakao_login_url = import.meta.env.VITE_BACKEND_URL + '/kakao/login'; 
                window.open(kakao_login_url, "_parent");
            }}>
                <Image src={'/button/kakao_login_small.png'}></Image>
            </button>
            </Container>
        </Navbar>
    )
}

export default Nav;