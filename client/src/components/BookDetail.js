import React from 'react';

const BookDetail = ({title, author, genre, barcode}) => {
      


    return (
        <>
            <p>Title: { title }</p>
            <p>Author: { author }</p>
            <p>Genre: { genre }</p>
            <p>Barcode: { barcode }</p>
        </>
    )
}

export default BookDetail

//State depending on which book is selected, right?