import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { HomeNavBar } from "./HomeNavBar";


export function Login() {
    const initialValues = { role: "user", username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    let isError = false;

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
            //openModal();
            if (formValues.role === "bank") {
                navigate('/bank');
            } else if (formValues.role === "user") {
                navigate('/user');
            } else if (formValues.role === "admin") {
                if(formValues.username === "admin" && formValues.password === "Admin@123") {
                    navigate('/admin');
                } else {
                    navigate('/login');
                }
            }
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
        const regexUsername = /^([a-zA-Z]{1}[a-zA-Z0-9]).{3,8}$/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        if (!values.username) {
            errors.username = "Username is required";
            isError = true;
        } else if (!regexUsername.test(values.username)) {
            errors.username = "Username must be 5-10 letters";
            isError = true;
        }
        if (!values.password) {
            errors.password = "Password is required";
            isError = true;
        } else if (!regexPassword.test(values.password)) {
            errors.password = "Not a Strong Password";
            isError = true;
        }
        return errors;
    };

    return (
        <>
            <HomeNavBar/>

            <Container className="col-8 justify-content-center" style={{ fontFamily: 'Times New Roman' }}>
                <Card className="text-center mt-0" style={{ border: "solid black" }}>
                    <Card.Header className="bg-danger text-white"><h3>Login Here</h3></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md='6'>
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" />
                            </Col>
                            <Col md='6'>
                                <Form className="text-start col-10 mx-auto" onSubmit={handleSubmit} >
                                    <Form.Group className="mt-3 " controlId="formBasicPassword">
                                        <Form.Label>Choose Role : </Form.Label>
                                        <Form.Select name="role" onChange={handleChange}>
                                            <option value={"user"}>User</option>
                                            <option value={"admin"}>Admin</option>
                                            <option value={"bank"}>Bank</option>
                                        </Form.Select><br />
                                        <Form.Label>Username :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Username"
                                            name="username"
                                            value={formValues.username}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.username}</span><br />

                                        <Form.Label>Password :</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter Password"
                                            name="password"
                                            value={formValues.password}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: "red" }}>{formErrors.password}</span><br />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button type="submit" variant="success">Login</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

            <Footer/>
        </>
    );
}
