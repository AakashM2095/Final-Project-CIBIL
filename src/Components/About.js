import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "./Footer";
import { HomeNavBar } from "./HomeNavBar";

export function About() {
    return (
        <>
            <HomeNavBar/>
            <Container style={{ fontFamily: 'Times New Roman' }}>
                <Container className="mt-5">
                    <Row>
                        <h2>What is a CIBIL</h2>
                        <Col lg={6} className="mt-4">
                            <img src="https://d1lt2ralzv8247.cloudfront.net/Know_This_Before_You_Apply_for_Loan_against_Property_with_Bad_CIBIL_Score_87a89964e4.jpg" alt="" style={{ height: '100%', width: '100%' }} />
                        </Col>
                        <Col lg={6} className="pt-4">
                            <p>
                                The Term Cibil stands for “Credit Information Bureau India Limited” and it is a company that is engaged in managing and keeping credit records of different companies, firms, and individuals based on which the lenders disburses the loan. The Banks and other lending institutions submit the information to Cibil based on which this company calculates the Cibil Score.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <h2>What is a CIBIL Score</h2>
                        <Col lg={6} className="pt-4">
                            <p>
                                A Cibil Score is a three-digit number that denotes your credit report. The Cibil score starts from 300 to 900 and if you are closer to a Cibil score of 900 then it is considered a good score. On the other hand, if your score is closer to 300 then it is a bad score and there are fewer chances to get any debt. Therefore it is necessary to keep an eye on your Cibil Score by checking it regularly.
                            </p>
                        </Col>
                        <Col lg={6} className="mt-4">
                            <img src="https://newsd.in/wp-content/uploads/2022/05/Improve-Your-Credit-Score.jpg" alt="" style={{ height: '80%', width: '80%' }} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </>

    );
}