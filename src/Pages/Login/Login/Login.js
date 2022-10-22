import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { signIn, setLoading } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    // const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleToSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                // setSuccess('User Login Successfully');
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please Verify Your Email. Your Email is not verified')
                }
            })
            .catch(e => {
                console.log(e);
                setError(e.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='shadow p-5'>
            <h3 className='text-primary text-center'>Please Login</h3>
            <Form onSubmit={handleToSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                </Form.Group>
                {/* <p className='text-success'>{success}</p> */}
                <p className='text-danger'>{error}</p>
                <p>New to This Website <Link to='/register'>Please Registration</Link></p>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;