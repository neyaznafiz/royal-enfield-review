import React from 'react';
import { BsArrowBarLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {

const navigate = useNavigate()

    return (
        <div className=''>
            <img className='rounded-lg mx-auto' src="error.gif" alt="" />

            <button className='flex mx-auto bg-sky-200 my-5 px-12 py-2 font-bold rounded-lg text-gray-600 hover:shadow-lg hover:bg-gray-400 hover:text-white'  onClick={()=> navigate(`/`)}>
                <BsArrowBarLeft className='my-auto mr-2 text-2xl font-bold'></BsArrowBarLeft> GO TO HOME
            </button>
        </div>
    );
};

export default ErrorPage;