import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Row className="m-0">
                <Col lg={12}>
                    <Card className="bg-dark text-white" style={{ fontFamily: 'Times New Roman' }}>
                        <Card.Img src="https://png.pngtree.com/background/20210709/original/pngtree-2-5d-business-office-the-internet-picture-image_929979.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                        <div className='m-5 mt-2' style={{ textAlign: 'initial' }}>
                            <Card.Title>
                                <h2>Check Your CIBIL Score <br/> Before Applying For Loan</h2>
                            </Card.Title>
                            <Card.Text>
                                <Button className="btn btn-primary my-2" onClick={()=>navigate('/login')}><h4>Get Free Cibil Score</h4></Button>
                            </Card.Text>
                        </div>
                        </Card.ImgOverlay>
                    </Card>
                    {/* <img src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/images/16-dec/how-does-gold-loan-affect-your-cibil-score.jpg" 
                         alt="" 
                         style={{ height: '80%', width: '100%' }} /> */}
                    {/* <img src="https://png.pngtree.com/background/20210709/original/pngtree-2-5d-business-office-the-internet-picture-image_929979.jpg"
                        alt=""
                        style={{ height: '80%', width: '100%' }} /> */}
                </Col>
            </Row>
            {/* <Row className="m-0">
                <Col lg={12}>
                    <h2>Check Your CIBIL Score
                        Before Approving Your Loan</h2>
                    <button className="btn btn-primary my-2">Get Free Cibil Score</button>
                </Col>
            </Row> */}
        </>
    );
}