import React from 'react';
import CoustomLink from '../CoustomLink/CoustomLink';

const Header = () => {
    return (
        <nav className='bg-gray-300'>
            
<CoustomLink to='/'>HOME</CoustomLink>
<CoustomLink to='/reviews'>REVIEWS</CoustomLink>
<CoustomLink to='/dashboard'>DASHBOARD</CoustomLink>
<CoustomLink to='/blogs'>BLOGS</CoustomLink>
<CoustomLink to='/about'>ABOUT</CoustomLink>

        </nav>
    );
};

export default Header;