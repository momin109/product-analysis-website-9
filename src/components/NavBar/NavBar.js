import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
    return (
        <div className=' '>

            <nav className='flex bg-amber-300 h-16 justify-center pt-4 font-bold text-2xl '>
                <CustomLink className='mr-3' to='/home'> Home</CustomLink>
                <CustomLink className='mr-3' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='mr-3' to='/dashboard'>DashBoard</CustomLink>
                <CustomLink className='mr-3' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='mr-3' to='/about'>About</CustomLink>
            </nav>
        </div>

    );
};

export default NavBar;