import React, { useState, useEffect } from 'react';
import './index.css'


const FormField = props => {

  const {history} = props
  
  const [booksCount, setBooksCount] = useState(0)
  const [formData, setFormData] = useState({
    bookTitle: '',
    bookAuthor: '',
    bookDescription: '',
    published: '',
  })

  useEffect(()=>{
    fetch('https://book-app-backend-app.onrender.com/getbookscount/',{method: 'GET'}).then(response => response.json()).then(jsonData => setBooksCount(jsonData.bookscount))
  },[])

  const handleTitleChange = event => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleAuthorChange = event => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleDescriptionChange = event => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handlePublishChange = async event => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const bookObject = {
      ...formData,
      bookId: booksCount + 1,
    }
    console.log(bookObject)
  
    const booksArrSnakeCase = {
      book_id: bookObject.bookId,
      book_title: bookObject.bookTitle,
      book_author: bookObject.bookAuthor,
      published: bookObject.published,
      book_description: bookObject.bookDescription,
    }

    
    const addBook = await fetch('https://book-app-backend-app.onrender.com/addbook/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booksArrSnakeCase),
    })

    history.push('/bookslistview');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="about-container">
        <div className="home-container">
          <label htmlFor="title">Book Title : </label>
          <input
            type="text"
            id="title"
            name="bookTitle"
            placeholder="Add Book Title"
            onChange={handleTitleChange}
            value={formData.bookTitle}
            className="mgn-left-title"
          />
        </div>
        <div className="home-container">
          <label htmlFor="author">Book Author : </label>
          <input
            type="text"
            id="author"
            name="bookAuthor"
            placeholder="Add Book Author"
            onChange={handleAuthorChange}
            value={formData.bookAuthor}
            className="mgn-left-author"
          />
        </div>
        <div className="home-container">
          <label htmlFor="author"  className='text-area-label'>Book Description : </label>
          <textarea
            type="text"
            id="author"
            name="bookDescription"
            placeholder="Add Description"
            onChange={handleDescriptionChange}
            value={formData.bookDescription}
            className="mgn-left-description"
            rows="6"
            cols="30"
          />
        </div>
        <div className="home-container">
          <label htmlFor="author">Published On : </label>
          <input
            type="text"
            id="author"
            name="published"
            placeholder="Add published year"
            onChange={handlePublishChange}
            value={formData.published}
            className="mgn-left-publish"
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default FormField
