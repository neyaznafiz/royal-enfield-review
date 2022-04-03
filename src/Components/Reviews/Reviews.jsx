import React from 'react';
import useReviewHooks from '../ReviewHooks/ReviewHooks';

const Reviews = () => {

    const [reviews, setReviews] = useReviewHooks()

    // const { picture, name, comment } = reviews

    return (
        <div>

            {
                reviews.map(review => <div className=''>

                    <div className='border border-neutral-600 px-10 pb-5 pt-2 mx-10 my-3 rounded-md'>

                       <div className='flex  gap-3'>
                       <img className='w-10 h-10 rounded-full ' src={review.picture} alt="" />
                        
                        <h1 className='font-bold pt-2 whitespace-nowrap'>{review.name}</h1>

                        <p className='pt-2'>{review.comment}</p>
                       </div>
                       
                    </div>

                </div>)
            }

        </div>
    );
};

export default Reviews;