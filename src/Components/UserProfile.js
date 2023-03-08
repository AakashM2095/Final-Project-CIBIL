import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export function UserProfile() {
    const navigate = useNavigate();
    const editUserProfile = () => {
        navigate('editUserProfile');
    }
    return (

        <>
            <Container className="col-6 justify-content-center mx-auto" style={{ fontFamily: 'Times New Roman' }}>
                <Card className="text-center mt-5" style={{ border: "solid black" }}>
                    <Card.Body>
                        <Card.Title><h3>Profile</h3></Card.Title>
                        <Card.Text>
                            <Row className='m-5'>
                                <Col>
                                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                                        className='rounded-circle'
                                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <input className='m-1' type="text" placeholder='Name'></input><br/>
                                    <input className='m-1' id="email" placeholder='Email'></input><br/>
                                    <input className='m-1' type="Number" placeholder='Phone Number'></input><br/>
                                </Col>
                            </Row>
                        </Card.Text>
                        <Button variant="primary" onClick={editUserProfile}>Edit Profile</Button>
                    </Card.Body>
                </Card>
            </Container>

        </>

    );
}