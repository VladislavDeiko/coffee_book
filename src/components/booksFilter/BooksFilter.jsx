import React from 'react'
import './booksFilter.scss'

function BooksFilter() {
  return (
    <section className="booksfilter">
        <div className="container">
            <div className="booksfilter__wrapper">
                <button className="btn booksfilter__btn">+ Добавить книгу</button>
                <div className="booksfilter__search">
                    <input placeholder='Название книги' className="booksfilter__search-input"  name='search' type="text"  />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BooksFilter