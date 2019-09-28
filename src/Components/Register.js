import React from 'react';
import firebase from '../Config/Firebase';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Register extends React.Component {

    state = {
        usr: 'owezz',
        pass: '123456',
        usrname: null,
        password: null
    }

    register = () => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then(function(){

        // })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });


    }

    render() {

        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <div style={{
                                marginTop: '50px'
                            }}>
                                <h1>Sign Up</h1>

                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                    </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="danger" type="submit">
                                        Register
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        );
    }
}

export default Register;
