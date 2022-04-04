import React from 'react';
import useReviewHooks from '../ReviewHooks/ReviewHooks';
import { BsStarHalf } from 'react-icons/bs';

const Reviews = () => {

    const [reviews] = useReviewHooks()

    return (
        <div>

            {
                reviews.map(review =>

                    <div className=''>

                        <div className='shadow-xl px-10 pb-5 pt-2 mx-10 mt-6 rounded-md'>

                            <div className='flex  gap-3'>
                                <img className='w-10 h-10 rounded-full ' src={review.picture} alt="" />

                                <div>
                                    <h1 className='font-bold pt-1 whitespace-nowrap text-lg'>{review.name}</h1>

                                    <p className='whitespace-nowrap flex font-semibold'> {review.rating} <BsStarHalf className='text-xs text-yellow-400 my-1.5 '></BsStarHalf></p>
                                </div>

                                <p className='pt-2'>{review.comment}</p>
                            </div>

                        </div>

                    </div>)
            }

        </div>
    );
};

export default Reviews;