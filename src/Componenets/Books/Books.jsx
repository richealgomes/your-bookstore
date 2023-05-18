import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
const {books} = useLoaderData()
console.log(books)
    return (
        <div className='cards'>
            <div className='grid  gap-8 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
            {
                books.map(book=><Book book={book}
                    key={book.isbn13
                    }></Book>)
            }
            </div>
            
        </div>
    );
};

export default Books;