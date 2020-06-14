import React from 'react'

import Home from '../static/images/home.png'
import Search from '../static/images/search.png'
import Filter from '../static/images/filter.png'
import Book from '../static/images/view.png'
import Rating from '../static/images/rating.png'
import Review from '../static/images/review.png'

import '../static/styles/Tutorial.css'


const Tutorial = (props) => {
    const features = [
      {
        url: Home,
        title: (<a className='lead' href='/books'>Browse Collection</a>),
        id: 'home',
        lead:
          'Welcome to the Boston Caffe Library. Cafes ' +
          'have become a popular place for work in the last ' +
          'decade. After noticing that remarkable number ' +
          'of people enjoying their books, I envisioned cafes ' +
          'functioning as a library. On this page you find yourself ' +
          'in the center that vision. Click on the menu icon to ' +
          'the left of the Boston Caffe Library banner to use ' +
          'filters. Navigate through the collection of over 1000 ' +
          'books. A white image my appear if there is no image ' +
          'on record for the book. Click on the image or white ' +
          'image to select the title'
      },
      {
        url: Search,
        title: 'Search Bar',
        id: 'search',
        lead:
          'Through the search bar you can browse through the \
          collection of books. Currently search by \
          title, author or isbn is upported.'
      },
      {
        url: Filter,
        title: 'Add-on filters',
        id: 'filter',
        lead:
          'The application supports three filters. Filter by\
          availibility, author or publication year. \
          Availibility allows you to displays books which \
          are out of stock. This option is off by default. \
          Toggling this option may increase the number of\
          search results. Always toggle this when returning\
          the book. Filtering by author will result only books\
          by the authors selected. Filtering by publication \
          year will result in books published in the years \
          selected. Click on the Boston Caffe Library brand \
          at anytime to reset the query filters.'
      },
      {
        url: Book,
        title: 'Rent a book',
        id: 'book',
        lead:
          "The tile, Eine ganz normal Affare, has been selected.\
                On this page you learn more about a books' and \
                its history at the library. Informartion regarding \
                availibility, ratings and reviews can be found here.\
                The Rent button allows you to rent out a book. This \
                button disables when the book becomes out of stock. \
                The Return button allows you to return a book to the \
                library. This button disables when the library has \
                all its copies in stock."
      },
      {
        url: Rating,
        title: 'Leave a rating',
        id: 'rating',
        lead:
          'The return form allows for two types of returns. A \
          return with a review and a return without a review. \
          Note that to complete a return with review, you must \
          include a rating and a review.'
      },
      {
        url: Review,
        title: 'Check out reviews',
        id: 'review',
        lead:
          'Our policy is free speech. To promote authentic reviews\
           we publicize all book reviews as is. Scroll to read\
           what people really had to say about this book.'
      }
    ];

    return (
      <div className='tutorial-page-wrapper'>
        <div className='tutorial-page-content'>
          <div className='tutorial-page-nav'>
            <div className='tutorial-page-brand'>
              <span>Tutorial</span>
            </div>
          </div>
          <div className='tutorial-page-features-wrapper'>
            <div className='tutorial-page-features-content'>
              {features.map(feature => {
                return featureCard(
                  feature.url,
                  feature.id,
                  feature.title,
                  feature.lead
                );
              })}
            </div>
          </div>
        </div>
        <div className='tutorial-page-jumper'>
          <ul>
            <li className='jumper-header'>Features</li>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#search'>Search</a>
            </li>
            <li>
              <a href='#filter'>Filter</a>
            </li>
            <li>
              <a href='#book'>Book</a>
            </li>
            <li>
              <a href='#rating'>Rating</a>
            </li>
            <li>
              <a href='#review'>Reviews</a>
            </li>
          </ul>
          <div className='jumper-footer'>
            <p>
              built by{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/jarryngandjui/'
              >
                jarry ngandjui
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}

const featureCard = (imageUrl, id, title, lead) => {
    return (
      <div id={id} className='feature-card-wrapper' key={title}>
        <div className='feature-card-content'>
          <div className='feature-card-title'>
            <span>{title}</span>
          </div>
          <div className='feature-card-image'>
            <img src={imageUrl} alt={title} />
          </div>
          <hr></hr>
          <div className='feature-card-lead'>
            <p>{lead}</p>
          </div>
        </div>
      </div>
    );
}


export default Tutorial