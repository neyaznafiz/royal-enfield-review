import React from 'react';
import useReviewHooks from '../ReviewHooks/ReviewHooks';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {

    const [reviews] = useReviewHooks()

    return (
        <div>

            <div className='px-10 py-10'>
                <h2 className='text-center text-xl font-semibold bg-gray-100 py-3 rounded-t-xl shadow-lg'>Peoples Review</h2>
            </div>

            {
                reviews.map(review => <SingleReview
                    key={review.id}
                    review={review}
                ></SingleReview>)
            }

        </div>
    );
};

export default Reviews;