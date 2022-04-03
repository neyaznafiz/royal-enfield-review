import React from 'react';
import CoustomLink from '../CoustomLink/CoustomLink';

const Header = () => {
    return (
        <nav className='bg-gray-300'>

         
           <ul className='flex space-x-4 py-4 justify-center'>
                <CoustomLink to='/' className="border-b-2">HOME</CoustomLink>
                <CoustomLink to='/reviews' className="border-b-2">REVIEWS</CoustomLink>
                <CoustomLink to='/dashboard' className="border-b-2">DASHBOARD</CoustomLink>
                <CoustomLink to='/blogs' className="border-b-2">BLOGS</CoustomLink>
                <CoustomLink to='/about' className="border-b-2">ABOUT</CoustomLink>
            </ul>
          
        </nav>
    );
};

export default Header;