import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export function BankProfile() {
    const navigate = useNavigate();
    const editBankProfile = () => {
        navigate('/editBankProfile');
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
                                        src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-bank-icon-png-image_532993.jpg" />
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
                        <Button variant="primary" onClick={editBankProfile}>Edit Profile</Button>
                    </Card.Body>
                </Card>
            </Container>

        </>

    );
}