import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, author, rating, category_id } = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='d-flex justify-content-between align-items-center my-4 px-5'>
                    <p>Author: {author.name ? author.name : 'No Author Found'}</p>
                    <p>Publish Date: {author.published_date}</p>
                    <p>
                        <FaStar className='me-2 text-warning'></FaStar>
                        <span>{rating?.number}</span>
                    </p>
                </div>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Back To Previous</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;