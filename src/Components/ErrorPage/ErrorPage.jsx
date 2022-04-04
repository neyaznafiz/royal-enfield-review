import React from 'react';
import { BsArrowBarLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {

const navigate = useNavigate()

    return (
        <div className='text-center'>

          <h2 className='text-red-600 text-9xl'>404</h2>
          <p className='text-3xl'>Page Not Fund</p>

            <button className='flex mx-auto bg-gray-200 my-9 px-12 py-2 font-bold rounded-lg text-gray-600 hover:shadow-lg hover:bg-gray-400 hover:text-white'  onClick={()=> navigate(-1)}>
                <BsArrowBarLeft className='my-auto mr-2 text-2xl font-bold'></BsArrowBarLeft> GO BACK
            </button>
        </div>
    );
};

export default ErrorPage;