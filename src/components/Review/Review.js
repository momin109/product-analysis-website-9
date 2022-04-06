import React from 'react';

const Review = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className='border-2 mr-5 p-5 drop-shadow-lg rounded-lg bg-lime-400'>
            <h2>Name : {name}</h2>
            <h4>{comment}</h4>
            <h4>{rating}</h4>
        </div>
    );
};

export default Review;