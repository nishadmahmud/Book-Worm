import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='px-28 py-16 bg-[#1313130D] rounded-2xl flex justify-center items-center'>
            <div className='space-y-10'>
                <h1 className='font-bold text-5xl'>Books to freshen up your bookshelf</h1>
                <button className='btn rounded-lg text-white font-bold text-lg bg-[#23BE0A]'>View The List</button>
            </div>
            <div>
                <img src={bookImage} className='rounded-md' />
            </div>
        </div>
    );
};

export default Banner;