import { Container, Row, Col, Form} from "react-bootstrap";
import Nav from "../components/Nav";

function Signin() {
    return(
        <>
            <Container className="vh-100">
                <Row className="h-100">
                    <Col className="d-flex justify-content-center align-items-center">
                        <Form className="border border-primary rounded p-4">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Signin;