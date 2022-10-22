import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleToGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleToGoogleSignIn} className='mb-2 px-4 py-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='my-4'>
                <h5>Find On Us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 shadow fw-bold'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 shadow fw-bold'><FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-2 shadow fw-bold'> <FaTwitch></FaTwitch> Twice</ListGroup.Item>
                    <ListGroup.Item className='mb-2 shadow fw-bold'> <FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 shadow fw-bold'> <FaLinkedin></FaLinkedin> LinkDin</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <h4>Brands</h4>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;