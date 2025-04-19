import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='py-10 md:px-28 md:py-16 gap-3 md:gap-0 bg-[#1313130D] rounded-2xl flex flex-col-reverse md:flex-row justify-center items-center'>
            <div className='space-y-10 px-2'>
                <h1 className='font-bold text-5xl'>Books to freshen up your bookshelf</h1>
                <button className='btn rounded-lg text-white font-bold text-lg bg-[#23BE0A]'>View The List</button>
            </div>
            <div className='px-2'>
                <img src={bookImage} className='rounded-md' />
            </div>
        </div>
    );
};

export default Banner;