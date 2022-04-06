import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
    return (
        <div className='background-color: rgb(107 114 128)'>

            <nav className='flex justify-center rgb(107 114 128)'>
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