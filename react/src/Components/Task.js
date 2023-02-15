import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import images from '../assests/image/a.jpg'
export const Task = () => {
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col sm={3}>
                        <img className="img-thumbnail" src={images} alt="profile image"/>
                    </Col>
                    <Col sm={9}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet id neque numquam quidem quo
                            unde? Blanditiis cumque deleniti earum est, excepturi ipsum minus modi nemo quod repellat
                            soluta temporibus. Reiciendis?
                        </div>
                       </Col>
                </Row>

            </Container>
            <br/>
            <br/>
            <br/>
        </>
    )
}
