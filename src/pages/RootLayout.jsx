import { Outlet } from "react-router-dom";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Component
import Header from "../components/Header";

const RootLayout = () => {
    return (
        <Container>
            <Header />
            <Row>
                <Col xs={{ span: 8, offset: 2 }}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default RootLayout