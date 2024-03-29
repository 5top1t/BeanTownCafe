/**
 * Card representation of a book in the landing page.
 */

import React from 'react'
import api from '../api'

/**
 * 
 * @param {book} props 
 */
const BookCard = (props) => {
  const url = '/book/view/' + props.book.isbn
  const { isbn, image_url_l } = props.book

  props.book.image_url_l = api.books.getImage(isbn, image_url_l);

  return (
    <div className='book-card-wrapper'>
      <div className='book-card-content'>
        <a className='book-card-image-button' href={url}>
          <img
            className='book-card-image'
            alt={props.book.title}
            src={props.book.image_url_l}
          />
        </a>
        <div className='book-card-info'>
          <div className='book-card-title'>
            <a href={url} className='book-card-title-text'>
              {props.book.title}
            </a>
          </div>

          <p className='book-card-author'>
            by. <i>{props.book.author}</i>
          </p>
          <p className='book-card-year'>
            published. <i>{props.book.publication_year}</i>
          </p>
          <p className='book-card-availability'>
            copies. <i>{props.book.available}</i>
          </p>
        </div>
      </div>
    </div>
  );
}


export default BookCard
