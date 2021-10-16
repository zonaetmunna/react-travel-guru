import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
     const { signInWithGoogle } = useAuth();
     return (
          <div>
               <Container>

                    <Row>
                         <Col md={6} className="mx-auto">
                              <h1 className="text-center text-success"> Login</h1>
                              <Form>
                                   <Form.Control className="mb-3" placeholder="First name" />
                                   <Form.Group className="mb-3" controlId="formGroupEmail">

                                        <Form.Control type="email" placeholder="Enter email" />
                                   </Form.Group>
                                   <Form.Group className="mb-3" controlId="formGroupPassword">

                                        <Form.Control type="password" placeholder="Password" />
                                   </Form.Group>
                                   <Form.Control type="submit" value="Submit" />
                              </Form>
                              <div>---------or---------</div>
                              <Button onClick={signInWithGoogle} type="submit"><i class="fab fa-google me-3 text-warning"></i>  Continue with Google</Button>
                         </Col>
                    </Row>
               </Container>


          </div>
     );
};

export default Login;