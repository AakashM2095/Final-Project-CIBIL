import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";


export function RegUser() {
    return (
        <>
            <Container className="col-7 justify-content-center" style={{ fontFamily: 'Times New Roman' }}>
                <Card className="text-center mt-5" style={{ border: "solid black" }}>
                    <Card.Header className="bg-danger text-white"><h3>Register</h3></Card.Header>
                    <Card.Body>

                        <Form className="text-start col-8 mx-auto" >

                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Row>
                                <Col lg={4}>
                                <Form.Label>First Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" name='userFirstName'  />
                                <span style={{ color: "red" }}>
                                    {/* {this.state.errors["bankName"]} */}
                                </span>
                                </Col>
                                <Col lg={4}>
                                <Form.Label>Middle Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Middle Name" name='userMiddleName'  />
                                <span style={{ color: "red" }}>
                                    {/* {this.state.errors["bankName"]} */}
                                </span>
                                </Col>
                                <Col lg={4}>
                                <Form.Label>Last Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" name='userLastName'  />
                                <span style={{ color: "red" }}>
                                    {/* {this.state.errors["bankName"]} */}
                                </span>
                                </Col>
                                </Row>
                                <Form.Label>Aadhaar Card No. :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Aadhaar Card No." name='userAadhaarNo'  />
                                <span style={{ color: "red" }}>
                                    {/* {this.state.errors["bankName"]} */}
                                </span>

                                <Form.Label>Phone Number :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone Number" name='phone' />
                                <span style={{ color: "red" }}>
                                    {/* {this.state.errors["phone"]} */}
                                </span><br />

                                <Form.Label>Email :</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name='email' />
                                <span style={{ color: "red" }}>
                                    {/* {this.state.errors["email"]} */}
                                </span><br />

                                <Form.Label>Username :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name='bankUsername'  />
                                <span style={{ color: "red" }}>
                                    {/* {this.state.errors["bankUsername"]} */}
                                </span><br />

                                <Form.Label>Password :</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name='bankPassword'  />
                                <span style={{ color: "red" }}>
                                    {/* {this.state.errors["bankPassword"]} */}
                                </span><br />

                            </Form.Group>
                            <Button type='submit' variant="success" ><h4>Register</h4></Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            {/* <Modal show={this.state.modalOpeningStatus} onHide={this.closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>NON AC User registered!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.closeDialog}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>

    );
}
