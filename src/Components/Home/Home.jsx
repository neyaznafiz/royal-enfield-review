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
                    <h2 className='text-6xl font-bold py-5'>Royal Enfield</h2>
                    <p className='p-6'>I’ve read the Royal Enfield Himalayan’s manual and paperwork so you don’t have to. Here’s the most important things I learnt about my new motorcycle. First things to do with your new beast Set your clock. Hold select and mode buttons for 3 seconds then press it to set hours. Hold select for 3 seconds.</p>
                </div>

                <div className=''>
                    <img className='my-6 rounded-md' src="royal-enfield.png" alt="" />
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

                             cfd   <div className='flex  gap-4'>

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