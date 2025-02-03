import { Container, Navbar, Image, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();

    const signupButtonClick = () => {
        navigate('/signin');
    }

    return(
        <Navbar bg="white" data-bs-theme="white" className='shadow-sm sticky-top'>
            <Container>
                <Navbar.Brand href={location.pathname == '/' ? '#' : '/'}>
                    <Image src='/logo/esjjh.png' width={150}/>
                </Navbar.Brand>
                
                <Button className='link-dark link-underline link-underline-opacity-0' variant='link'  onClick={signupButtonClick}>
                    로그인
                </Button>
            </Container>
        </Navbar>
    )
}

export default Nav;