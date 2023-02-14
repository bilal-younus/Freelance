import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import {useState} from "react";
export const Task2 = () => {
    let [val1, setVal1] = useState(0);
    let [val2, setVal2] = useState(0);
    let [result1, setResult1] = useState(0);
    const value1 = (e)=>
    {
          setVal1(e.target.value)
    }
    const value2 = (e)=>
    {
          setVal2(e.target.value)

    }
    const click = ()=>
    {
        let add = parseInt(val1) + parseInt(val2)
        setResult1(add)
        setVal1("")
        setVal2("")

    }


    return (
        <>
            <Form>
                <Form.Group as={Row} className="mb-3 custom-select" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Enter First Number:
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" placeholder="Integer" value={val1} onChange={value1} >
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Enter Second Number:
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" value={val2} placeholder="Integer" onChange={value2} />
                    </Col>
                </Form.Group>
                <Button className="float-start ms-5" variant="primary" onClick={click}>Submit</Button>
            </Form>
            <br/>
            <br/>
            <h2>Your Addition Result (From Server) is: </h2>
            <h2>Your Addition Result (From ReactJs) is: {result1} </h2>


        </>
    )
}
