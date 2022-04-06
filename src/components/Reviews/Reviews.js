import React, { useContext } from 'react';
import { ReviewsContext } from '../../App';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useContext(ReviewsContext)
    return (
        <div>
            <h2>Customer Reviews (6)</h2>
            <div className='grid grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;