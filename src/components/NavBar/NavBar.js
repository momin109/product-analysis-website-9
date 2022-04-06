import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
    return (
        <div className='bg-amber-300 h-24 '>
            <h2 className='text-3xl font-bold pt-2 pl-6'>Star Tech</h2>
            <nav className='flex  justify-center font-bold text-2xl '>
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