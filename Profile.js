import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export function Profile() {
    const navigate = useNavigate();
    const editProfile = () =>{
        navigate('/editProfile');
    }
    return (
    
        <>
        <div className="content-wrapper">
            <Container className="col-8 justify-content-center" style={{ fontFamily: 'Times New Roman' }}>
        <Card  className="text-center mt-5"  style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Profile</Card.Title>
        <Card.Text>
            <div>
            <img style = {{width:"160px", height:"160px", borderRadius:"80px"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jwSQgCkm6QMwHg1uHfJ5DGG1bNZWiI-8kA&usqp=CAU"/>
            </div>

            <div>
                <input type="text" placeholder='Name'></input>
                <input id="email"  placeholder='Email'></input>
                <input type="Number" placeholder='Phone Number'></input>
            </div>
        </Card.Text>
        <Button variant="primary" onClick={editProfile}>Edit Profile</Button>
        </Card.Body>
        </Card>
        </Container>
        </div>
        
        </>

   ); 
}


