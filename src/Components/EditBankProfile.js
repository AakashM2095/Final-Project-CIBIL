import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export function RegBank() {
    const initialValues = { bankName: "", phone: "", email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    let isError = false;
    const [isModalOpened, setIsModalOpened] = useState(false);
    //const navigate = useNavigate();

    const openModal = () => {
        setIsModalOpened(true);
    }

    const closeModal = () => {
        setIsModalOpened(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if (!isError) {
            console.log("No errors");
            //const response = await addProvider(formValues);
            //console.log(response);
            openModal();
        }
        else {
            console.log("Errors");
            console.log(formErrors);
        }
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexPhone = /^[7-9]{1}[0-9]{2}[0-9]{3}[0-9]{4}$/;
        const regexName = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
        if (!values.bankName) {
            errors.bankName = "Name is required";
            isError = true;
        } else if (values.bankName.length < 6) {
            errors.bankName = "Name must be min. 6 characters";
            isError = true;
        } else if (!regexName.test(values.bankName)) {
            errors.bankName = "Only alphabets are allowed";
            isError = true;
        }
        if (!values.phone) {
            errors.phone = "Phone no. is required";
            isError = true;
        } else if (!regexPhone.test(values.phone)) {
            errors.phone = "Invalid Phone no.";
            isError = true;
        }
        if (!values.email) {
            errors.email = "Email is required";
            isError = true;
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email Id";
            isError = true;
        }

        return errors;
    };

    const saveProfile = () => {
        navigate("/bankProfile");
    }

    return (
        <>

            <Container className="col-6 justify-content-center" style={{ fontFamily: 'Times New Roman' }}>
                <Card className="text-center mt-5" style={{ border: "solid black" }}>
                    <Card.Header className="bg-danger text-white"><h3>Edit Profile</h3></Card.Header>
                    <Card.Body>
                        <Form className="text-start col-10 mx-auto" onSubmit={handleSubmit} >
                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Row>
                                    <Col>
                                        <Form.Label>Bank Name :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Bank Name"
                                            name="bankName"
                                            value={formValues.bankName}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.bankName}</span><br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Phone Number :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Phone Number"
                                            name="phone"
                                            value={formValues.phone}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.phone}</span><br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Email :</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.email}</span><br />
                                    </Col>
                                </Row>

                            </Form.Group>
                            <div className="text-center">
                                <Button type="submit" variant="success" className="w-100"><h5>Save Profile</h5></Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <Modal show={isModalOpened} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formValues.bankUsername} Profile Edited Successfully</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={saveProfile}>
                    click here to view profile
                    </Button>
                    <Button variant="success" onClick={closeModal}>
                        Back
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    );
}
