import { Col, Row } from 'react-bootstrap';

export function Home() {
    return (
        <>
            <Row className="m-0">
                <Col lg={12}>
                    <img src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/images/16-dec/how-does-gold-loan-affect-your-cibil-score.jpg" 
                         alt="" 
                         style={{ height: '80%', width: '100%' }} />
                </Col>
            </Row>
            <Row className="m-0">
                <Col lg={12}>
                    <h2>Check Your CIBIL Score
                        Before Approving Your Loan</h2>
                    <button className="btn btn-primary my-2">Get Free Cibil Score</button>
                </Col>
            </Row>
        </>
    );
}