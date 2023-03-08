import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";


export function RegCustomer() {
    const initialValues = { custFirstName: "", custMiddleName: "", custLastName: "", custAadhaarNo: "", phone: "", email: "", custAccountNo: "", houseNo: "", area: "", city: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
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
        const errors = {};
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexPhone = /^[7-9]{1}[0-9]{2}[0-9]{3}[0-9]{4}$/;
        const regexAadhaar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
        const regexAccount = /^[0-9]{9,18}$/;
        const regexName = /^[a-zA-Z]+$/;
        if (!values.custFirstName) {
            errors.custFirstName = "First Name is required";
            isError = true;
        } else if (values.custFirstName.length < 2) {
            errors.custFirstName = "must be min. 2 characters";
            isError = true;
        } else if (!regexName.test(values.custFirstName)) {
            errors.custFirstName = "Only alphabets are allowed";
            isError = true;
        }
        if (!values.custMiddleName) {
            errors.custMiddleName = "Middle Name is required";
            isError = true;
        } else if (values.custMiddleName.length < 2) {
            errors.custMiddleName = "must be min. 2 characters";
            isError = true;
        } else if (!regexName.test(values.custMiddleName)) {
            errors.custMiddleName = "Only alphabets are allowed";
            isError = true;
        }
        if (!values.custLastName) {
            errors.custLastName = "Last Name is required";
            isError = true;
        } else if (values.custLastName.length < 2) {
            errors.custLastName = "must be min. 2 characters";
            isError = true;
        } else if (!regexName.test(values.custLastName)) {
            errors.custLastName = "Only alphabets are allowed";
            isError = true;
        }
        if (!values.custAadhaarNo) {
            errors.custAadhaarNo = "Aadhaar no. is required";
            isError = true;
        } else if (!regexAadhaar.test(values.custAadhaarNo)) {
            errors.custAadhaarNo = "Invalid Aadhaar no.";
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
        if (!values.custAccountNo) {
            errors.custAccountNo = "Account no. is required";
            isError = true;
        } else if (!regexAccount.test(values.custAccountNo)) {
            errors.custAccountNo = "Invalid Account no.";
            isError = true;
        }
        if (!values.houseNo) {
            errors.houseNo = "House No. is required";
            isError = true;
        } 
        if (!values.area) {
            errors.area = "Area is required";
            isError = true;
        } 
        if (!values.city) {
            errors.city = "City is required";
            isError = true;
        } else if (!regexName.test(values.city)) {
            errors.city = "Only alphabets are allowed";
            isError = true;
        } 
        
        return errors;
    };

    // const handleLogin = ()=>{
    //     navigate("/login");
    // }

    return (
        <>
        <div className="content-wrapper">
            <Container className="col-8 justify-content-center" style={{ fontFamily: 'Times New Roman' }}>
                <Card className="text-center mt-5" style={{ border: "solid black" }}>
                    <Card.Header className="bg-danger text-white"><h3>Add Customer</h3></Card.Header>
                    <Card.Body>
                        <Form className="text-start col-10 mx-auto" onSubmit={handleSubmit} >
                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter First Name"
                                            name="custFirstName"
                                            value={formValues.custFirstName}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.custFirstName}</span>
                                    </Col>
                                    <Col>
                                        <Form.Label>Middle Name :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Middle Name"
                                            name="custMiddleName"
                                            value={formValues.custMiddleName}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.custMiddleName}</span>
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Last Name"
                                            name="custLastName"
                                            value={formValues.custLastName}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.custLastName}</span><br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Aadhaar Card No. :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Aadhaar Card No."
                                            name="custAadhaarNo"
                                            value={formValues.custAadhaarNo}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.custAadhaarNo}</span>
                                    </Col>
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
                                    <Col>
                                        <Form.Label>Account No :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Account No."
                                            name="custAccountNo"
                                            value={formValues.custAccountNo}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.custAccountNo}</span><br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Label>Address :</Form.Label>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter House No."
                                            name="houseNo"
                                            value={formValues.houseNo}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.houseNo}</span><br />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Area"
                                            name="area"
                                            value={formValues.area}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.area}</span><br />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter City"
                                            name="city"
                                            value={formValues.city}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.city}</span><br />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <div class="text-center">
                                <Button type="submit" variant="success" ><h5>Register</h5></Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <Modal show={isModalOpened} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formValues.userUsername} Registered Successfully</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" >
                        click here to login
                    </Button>
                    <Button variant="success" onClick={closeModal}>
                        Back
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </>

    );
}
