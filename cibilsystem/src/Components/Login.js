import { Button, Col, Container, Form, Row } from "react-bootstrap";


export function Login() {
    return (
        <Container className="mt-5">
            <Row>
                <h2>Login</h2>
                <Col lg={7} className="mt-4">
                    <img src="https://d1lt2ralzv8247.cloudfront.net/Know_This_Before_You_Apply_for_Loan_against_Property_with_Bad_CIBIL_Score_87a89964e4.jpg" alt="" style={{ height: '100%', width: '100%' }} />
                </Col>
                <Col lg={5} className="pt-4">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose Role</Form.Label>
                            <Form.Select>
                                <option>User</option>
                                <option>Bank</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label >Username</Form.Label>
                            <Form.Control placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        {/* <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    
                                    label="Can't check this"
                                />
                            </Form.Group> */}
                        <Button type="submit">Submit</Button>

                    </Form>
                </Col>
            </Row>
        </Container>

    );
}
