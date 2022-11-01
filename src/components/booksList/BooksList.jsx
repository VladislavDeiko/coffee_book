import React from 'react'
import BooksListItem from '../booksListItem/BooksListItem'

import './bookList.scss'

function BooksList() {
  return (
    <section className="bookslist">
        <div className="container">
            <div className="bookslist__wrapper">
                <div className="bookslist__header">
                    <div className="bookslist__header-name">Название книги</div>
                    <div className="bookslist__header-status">Статус</div>
                    <div className="bookslist__header-data">Дата</div>
                </div>
                <div className="bookslist__items">
                    <BooksListItem/>
                    <BooksListItem/>
                    <BooksListItem/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BooksList