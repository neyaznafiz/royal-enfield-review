import React from 'react';

const Home = () => {
    return (
        <div>

        <div className='grid grid-cols-2 justify-items-center items-center'>
            <div className=''>
                <h2 className='text-6xl font-bold py-5'>Royal Enfield</h2>
                <h2 className='text-6xl font-bold'>Things to Know</h2>
                <p className='p-6'>I’ve read the Royal Enfield Himalayan’s manual and paperwork so you don’t have to. Here’s the most important things I learnt about my new motorcycle. First things to do with your new beast Set your clock. Hold select and mode buttons for 3 seconds then press it to set hours. Hold select for 3 seconds.</p>
            </div>

            <div className=''>
                <img className='my-6 rounded-md' src="royal-enfield.png" alt="" />
            </div>

        </div>
        
        </div>
    );
};

export default Home;