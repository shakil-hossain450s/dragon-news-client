import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const {
        createUser,
        updateUserProfile,
        verifyEmail,
    } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const handleToSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess('User Create Successfully');
                setError('');
                updateCurrentUserProfile(name, photoURL);
                verifyUserEmail();
                toast.success('Please Verify Your Email')
            })
            .catch(e => {
                console.log(e);
                setError(e.message)
            })

    }

    const updateCurrentUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))

    }

    const verifyUserEmail = () => {
        verifyEmail();
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='shadow p-5'>
            <h3 className='text-primary text-center'>Please Register</h3>
            <Form onSubmit={handleToSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                </Form.Group>
                <p>Already Have An Account <Link to='/login'>Please Login</Link></p>
                <p className='text-success'>{success}</p>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>

        </div>
    );
};

export default Register;