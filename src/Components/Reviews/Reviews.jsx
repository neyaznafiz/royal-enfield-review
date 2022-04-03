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

                       <div className='flex'>
                       <img className='w-10 h-10 rounded-full ' src={review.picture} alt="" />
                        
                        <span className='font-bold pt-2 ml-2'>{review.name}</span>

                        <p className='ml-10'>{review.comment}</p>
                       </div>

                        
                    

                    </div>

                </div>)
            }

        </div>
    );
};

export default Reviews;