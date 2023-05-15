import React, { useState, useEffect } from 'react';

const BookDetailedView = (props) => {
  console.log('route props', props);

  const { match } = props;
  const { params } = match;
  const { id } = params;
  const bookId = {
    id,
  };

  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://book-app-backend-app-render.onrender.com/getbooks/${id}`, {
          method: 'POST',
          body: JSON.stringify(bookId),
        });
        const jsonData = await response.json();
        setBookDetails(jsonData);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchData();
  }, [id]);

  console.log('book details', bookDetails[0]);

  const { book_description } = bookDetails[0] || {};

  return (
    <div>
      <p>{book_description}</p>
    </div>
  );
};

export default BookDetailedView;
