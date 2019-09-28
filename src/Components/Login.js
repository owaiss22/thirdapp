import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


class Login extends React.Component {

    state = {
        usr: 'owezz',
        pass: '123456',
        usrname: null,
        password: null
    }

    login = () =>{
        const { usr, pass, usrname, password } = this.state;

        if(usr === usrname){
            if(pass === password){
                this.props.home();
            }
        }
    }

    handleChange = (event) =>{

        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {

        const { reg } = this.props;

        return (

            <React.Fragment>

                <Container>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <div style={{
                                marginTop: '50px'
                            }}>
                                <h1>Login</h1>

                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="usrname" onChange={this.handleChange} placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                    </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                                    </Form.Group>
                                    <span>
                                        Don't have an account <span style={{
                                            color: 'blue',
                                            cursor: 'pointer'
                                        }} onClick={reg}>
                                            Register
                                        </span>
                                    </span>
                                    <br/> <br/>
                                    <Button variant="success" onClick={this.login}>
                                        Submit
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

export default Login;
