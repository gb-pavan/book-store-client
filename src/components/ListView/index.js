
import {Link} from 'react-router-dom'
import React,{useState, useEffect} from 'react'
import BookDetailedView from '../BookDetailedView'

import './index.css'

const Home = () => {

  const [fetchedBooks, setFetchedBooks] = useState([])
  
  useEffect(()=>{
    fetch('https://book-app-backend-app-render.onrender.com/getbooks/',{method: 'GET'}).then(response => response.json()).then(jsonData => setFetchedBooks(jsonData))
  },[])


  
  const bookStackArr = fetchedBooks.map(eachBook => ({
    bookAuthor: eachBook.book_author,
    bookTitle: eachBook.book_title,
    published: eachBook.published,
    bookId: eachBook.book_id,
    bookDescription: eachBook.book_description,
  }))
  // console.log(`booksFetched : ${booksArrCamelCase}`)

  const [selectedBookId, setSelectedBookId] = useState(null)
  const [selectedBook, setSelectedBook] = useState([])
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [showDetails, setShowDetails] = useState({condition: false})

  const handleMouseEnter = index => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(-1)
  }

  const handleClick = bookId => {
    const clickedBook = bookStackArr.filter(eachBook => eachBook.bookId === bookId)
    console.log('clickedBook',clickedBook)
    setSelectedBook(clickedBook[0])
    setSelectedBookId(bookId)
    setShowDetails({condition: true})
    console.log(selectedBookId)
  }

  return showDetails.condition === false ? (
    <div className="full-container">
      <table className="centered-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody className='rows-style'>
          {bookStackArr.map(book => (
            <Link to={`/getbooks/${book.bookId}`} >
              <tr
              key={book.bookId} 
              onClick={() => handleClick(book.bookId)}
              style={{
                cursor: 'pointer',
                backgroundColor: hoveredIndex === book.bookId ? 'yellow' : 'initial',
                textAlign:'center',
              }}
              onMouseEnter={() => handleMouseEnter(book.bookId)}
              onMouseLeave={handleMouseLeave} 
              >
                <td>{book.bookTitle}</td>
                <td>{book.bookAuthor}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  ) : 
  <BookDetailedView selectedBook={selectedBook} />
}

export default Home
