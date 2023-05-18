import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image,title,subtitle,price}=book;
    return (
        <Link to={`../books/${book.isbn13}`}><div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl  '>
        <img className='object-cover w-full  h-56 md:min-h-full lg:h-80' src={image} alt=" book cover" />
        <div className='bg-black bg-opacity-70 opacity-0 px-8 py-6 hover:opacity-100 hover:rounded text-gray-300 absolute inset-0 transition-opacity-200 flex flex-col'>
         <p className='font-semibold text-xl text-gray-300'>{title}</p>
         <br />
         <p className='pt-5'>{subtitle.substring(0,45)}....</p>
         <br />
         <p className='mt-auto text-2xl font-bold'>{price}</p>
        </div>
     </div></Link>
    );
};

export default Book;