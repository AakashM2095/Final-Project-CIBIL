import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";


export function RegUser() {
    const initialValues = { userFirstName: "", userMiddleName: "", userLastName: "", userAadhaarNo: "", phone: "", email: "", userUsername: "", userPassword: "", cUserPassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    let isError = false;
    let isValidOtp = false;
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
        const regexName = /^[a-zA-Z]+$/;
        const regexUsername = /^([a-zA-Z]{1}[a-zA-Z0-9]).{3,8}$/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
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
        if (!values.userAadhaarNo) {
            errors.userAadhaarNo = "Aadhaar no. is required";
            isError = true;
        } else if (!regexAadhaar.test(values.userAadhaarNo)) {
            errors.userAadhaarNo = "Invalid Aadhaar no.";
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
        if (!values.userUsername) {
            errors.userUsername = "Username is required";
            isError = true;
        } else if (!regexUsername.test(values.userUsername)) {
            errors.userUsername = "Username must be 5-10 letters";
            isError = true;
        }
        if (!values.userPassword) {
            errors.userPassword = "Password is required";
            isError = true;
        } else if (!regexPassword.test(values.userPassword)) {
            errors.userPassword = "Not a Strong Password";
            isError = true;
        }
        if (!values.cUserPassword) {
            errors.cUserPassword = "Confirm Password is required";
            isError = true;
        } else if (values.userPassword !== values.cUserPassword) {
            errors.cUserPassword = "Password not matched"
            isError = true;
        }
        return errors;
    };

    const handleLogin = ()=>{
        navigate("/login");
    }

    const sendOtp = (e) => {
        e.preventDefault();
        let otp_val = Math.floor(Math.random()*10000);

        let emailbody = `
            <h1>Your OTP is </h1> ${otp_val}
        `
        const config = {
            SecureToken : "c4e0d957-828f-4cc6-ba63-3b5e4c160e39",
            To : formValues.email,
            From : "rautsanket2022@gmail.com",
            Subject : "OTP for registration Cibil System",
            Body : emailbody
        };
        if(window.Email) {
            window.Email.send(config).then(message => {
                if(message == "OK") {
                    alert("OTP sent to your email");
        
                    const otp_inp = document.getElementById('otp_inp');
                    const otp_btn = document.getElementById('otp_btn');
        
                    otp_btn.addEventListener('click',()=>{
                        if(otp_inp.value == otp_val) {
                            alert("Email Verified");
                            isValidOtp = true;
                        }
                        else {
                            alert("Invalid Otp");
                        }
                    })
                }
              });
        }
    }


    return (
        <>
            <Container className="col-8 justify-content-center" style={{ fontFamily: 'Times New Roman' }}>
                <Card className="text-center mt-5" style={{ border: "solid black" }}>
                    <Card.Header className="bg-danger text-white"><h3>Register Here</h3></Card.Header>
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
                                        <Form.Label>Aadhaar Card No. :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Aadhaar Card No."
                                            name="userAadhaarNo"
                                            value={formValues.userAadhaarNo}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.userAadhaarNo}</span>
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
                                        <Form.Label>Username : <span style={{ color: "green" }}>(*in 5-10 letters)</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Username"
                                            name="userUsername"
                                            value={formValues.userUsername}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.userUsername}</span><br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Password : <span style={{ color: "green" }}>(*in 8-10 letters)</span></Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter Password"
                                            name="userPassword"
                                            value={formValues.userPassword}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.userPassword}</span><br />
                                    </Col>
                                    <Col>
                                        <Form.Label>Confirm Password :</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="cUserPassword"
                                            value={formValues.cUserPassword}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.cUserPassword}</span><br />
                                    </Col>
                                    <Row className="text-center">
                                    <Col>
                                        <Button onClick={sendOtp} className="btn btn-success">Send OTP</Button>
                                    </Col>
                                    <Col>
                                        <input type={Text} id='otp_inp' className="form-control" placeholder="Enter OTP"></input>
                                    </Col>
                                    <Col>
                                        <Button id='otp_btn' className="btn btn-success">Verify OTP</Button>
                                    </Col>
                                </Row>
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
                    <Button variant="success" onClick={handleLogin}>
                        click here to login
                    </Button>
                    <Button variant="success" onClick={closeModal}>
                        Back
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
