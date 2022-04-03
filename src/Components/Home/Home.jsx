import React from 'react';
import useReviewHooks from '../ReviewHooks/ReviewHooks';

const Home = () => {

    const [reviews, setReviews] = useReviewHooks()

    return (
        <div>

            <div className='grid grid-cols-2 justify-items-center items-center px-10'>
                <div className=''>
                    <h2 className='text-6xl font-bold py-5'>Royal Enfield</h2>
                    <h2 className='text-6xl font-bold'>Things to Know</h2>
                    <p className='p-6'>I’ve read the Royal Enfield Himalayan’s manual and paperwork so you don’t have to. Here’s the most important things I learnt about my new motorcycle. First things to do with your new beast Set your clock. Hold select and mode buttons for 3 seconds then press it to set hours. Hold select for 3 seconds.</p>
                </div>

                <div className=''>
                    <img className='my-6 rounded-md' src="royal-enfield.png" alt="" />
                </div>

            </div>
            <div className='my-14'>
                <div>
                    <h3 className='text-2xl text-center font-bold bg-gray-300 '>Coustomer Review</h3>
                </div>
                <div>

                    {
                        reviews.slice(0, 3).map(review => <div>

                            <div className='border border-neutral-600 px-10 pb-5 pt-2 mx-10 my-3 rounded-md'>

                                <div className='flex'>
                                    <img className='w-10 h-10 rounded-full ' src={review.picture} alt="" />

                                    <span className='font-bold pt-2 ml-2'>{review.name}</span>

                                    <p className='ml-10'>{review.comment}</p>
                                </div>




                            </div>

                        </div>)
                    }

                    <button className='mt-5 bg-gray-400 px-4 rounded-md'>SEE ALL REVIEWS</button>
                </div>
            </div>
        </div>
    );
};

export default Home;