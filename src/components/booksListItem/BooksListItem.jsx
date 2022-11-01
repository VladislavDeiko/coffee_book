import React from 'react'

import './booksListItem.scss'

function BooksListItem() {
  return (
    <div className="bookslist__item">
        <div className="booksList__item-name">Американские боги</div>
        <div className="booksList__item-status">Прочитано</div>
        <div className="booksList__item-data">15-01-2022</div>
    </div>
  )
}

export default BooksListItem