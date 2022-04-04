import React from 'react';
import { BsStarHalf } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useReviewHooks from '../ReviewHooks/ReviewHooks';

const Home = () => {

    const [reviews] = useReviewHooks()

    const navigate = useNavigate()

    return (
        <div>

            <div className='grid grid-cols-2 justify-items-center items-center px-10'>
                <div className=''>
                    <h2 className='text-6xl font-bold py-5  text-amber-900'>Royal Enfield</h2>
                    <p className='p-6'>Firstly it's Royal Enfield's first ever made cafe racer bike. I loved it by the looks and awesome styling, as there is more options for this cafe racer bikes, they don't have such great road presence, but well created. They are over priced according to Indian roads and rules. 0 to 100 in 5 seconds. No vibration, and excellent for long-distance with good control off-road and as well as on the road. 650 cc gives good speed on highways. I will recommend this who want to go for long drives with comfortable seating and uninterrupted ride with a good service network of Royal enfield Trusted brand.</p>

                   <div className='mt-9 text-center'>
                   <a href="https://www.youtube.com/watch?v=2I-Fdc4w6is" target="_blank" className='mt-5 bg-gray-300 px-4 py-2 mb-7 rounded-md shadow-lg hover:bg-gray-500 hover:text-white'> Explore Royal Enfield </a>
                   </div>

                </div>

                <div className=''>
                    <img className='my-6 rounded-md ' src="royal-enfield.png" alt="" />
                </div>

            </div>
            <div className='my-14 pt-10'>

                <div className='px-10'>
                    <h2 className='text-center text-xl font-semibold bg-gray-100 py-3 rounded-t-xl shadow-lg'>Peoples Review</h2>
                </div>
                <div>

                    {
                        reviews.slice(0, 3).map(review => <div>

                            <div className=' shadow-xl px-10 pb-5 pt-2 mx-10 my-5 rounded-md'>

                                <div className='flex  gap-4'>

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

                    <div className='text-center '>
                        <button onClick={() => navigate(`/reviews`)} className='mt-5 bg-gray-300 px-4 py-2 mb-7 rounded-md shadow-lg hover:bg-gray-500 hover:text-white'>SEE ALL REVIEWS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;