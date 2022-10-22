import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import './Home.css';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <div className='home-news'>
                {
                    allNews.map(news => <NewsSummaryCard
                        key={news._id}
                        news={news}
                    ></NewsSummaryCard>)
                }
            </div>
        </div>
    );
};

export default Home;