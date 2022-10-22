import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {

    const { _id, author, title, details, rating, image_url, total_view } = news;

    return (
        <Card className="mb-5 shadow">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center justify-center'>
                    <Image
                        roundedCircle
                        className='me-3'
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div className='mt-3'>
                        <p
                            style={{ lineHeight: '8px' }}>
                            {author.name ? author.name : "No Author Found"}
                        </p>
                        <p style={{ lineHeight: '10px' }}>{author.published_date}</p>
                    </div>
                </div>
                <div style={{ fontSize: '18px' }}>
                    <Link><FaShareAlt className='mx-3 text-dark'></FaShareAlt></Link>
                    <Link><FaRegBookmark className='text-dark'></FaRegBookmark></Link>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-3' variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <span>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></span>
                            :
                            <span>{details}</span>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between ">
                <div style={{ fontSize: '18px' }}>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;