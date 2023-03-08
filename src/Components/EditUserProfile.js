import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export function EditUserProfile() {
    const initialValues = { userFirstName: "", userMiddleName: "", userLastName: "", phone: "", email: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    let isError = false;
    const [isModalOpened, setIsModalOpened] = useState(false);
    const navigate = useNavigate();

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
        const errors = {};
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexPhone = /^[7-9]{1}[0-9]{2}[0-9]{3}[0-9]{4}$/;      
        const regexName = /^[a-zA-Z]+$/;
       
       
        if (!values.userFirstName) {
            errors.userFirstName = "First Name is required";
            isError = true;
        } else if (values.userFirstName.length < 2) {
            errors.userFirstName = "must be min. 2 characters";
            isError = true;
        } else if (!regexName.test(values.userFirstName)) {
            errors.userFirstName = "Only alphabets are allowed";
            isError = true;
        }
        if (!values.userMiddleName) {
            errors.userMiddleName = "Middle Name is required";
            isError = true;
        } else if (values.userMiddleName.length < 2) {
            errors.userMiddleName = "must be min. 2 characters";
            isError = true;
        } else if (!regexName.test(values.userMiddleName)) {
            errors.userMiddleName = "Only alphabets are allowed";
            isError = true;
        }
        if (!values.userLastName) {
            errors.userLastName = "Last Name is required";
            isError = true;
        } else if (values.userLastName.length < 2) {
            errors.userLastName = "must be min. 2 characters";
            isError = true;
        } else if (!regexName.test(values.userLastName)) {
            errors.userLastName = "Only alphabets are allowed";
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

    const saveProfile = ()=>{
        navigate("/userProfile");
    }

    return (
        <>
            <Container className="col-8 justify-content-center" style={{ fontFamily: 'Times New Roman' }}>
                <Card className="text-center mt-5 mx-auto" style={{ border: "solid black" }}>
                    <Card.Header className="bg-danger text-white"><h3>Edit Profile</h3></Card.Header>
                    <Card.Body>
                        <Form className="text-start col-10 mx-auto" onSubmit={handleSubmit} >
                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter First Name"
                                            name="userFirstName"
                                            value={formValues.userFirstName}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.userFirstName}</span>
                                    </Col>
                                    <Col>
                                        <Form.Label>Middle Name :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Middle Name"
                                            name="userMiddleName"
                                            value={formValues.userMiddleName}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.userMiddleName}</span>
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Last Name"
                                            name="userLastName"
                                            value={formValues.userLastName}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.userLastName}</span><br />
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
                            <div class="text-center">
                                <Button type="submit" variant="success" ><h5>Save Profile</h5></Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <Modal show={isModalOpened} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formValues.userUsername} Profile Edited Successfully</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={saveProfile} >
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