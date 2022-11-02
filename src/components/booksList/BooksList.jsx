import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BooksListItem from '../booksListItem/BooksListItem'
import { booksSortDate } from '../..//store/slices/booksSlice'

import './bookList.scss'
import arrow from '../../assets/icons/arrow.png'

function BooksList() {
    const filterBooks = useSelector(state => state.books.filterBooks);
    const dispatch = useDispatch();

    const [sort, setSort] = useState('');

    const handleSort = () => {
        dispatch(booksSortDate(sort))
        if (sort === "" || sort === "down") {
            setSort('up')
        } else {
            setSort('down')
        }
    }

    const renderBooks = (books) => {
        if (books.length === 0) {
            return (
                <div className="bookslist__item">
                    <div className="booksList__item-name">Пока нет книг в вашем списке</div>
                </div>
            )
        } else {
            return books.map(({title,status,date}) => {
                return <BooksListItem key = {title} title={title} status={status} date={date}/>
            })
        }
    }

    const styleArrow = sort === "down" ? {opacity: 1} : 
                       sort === "up" ? {opacity:1, transform: 'rotate(540deg)'} : {opacity: 0}

    const renderList = renderBooks(filterBooks)

    return (
    <section className="bookslist">
        <div className="container">
            <div className="bookslist__wrapper">
                <div className="bookslist__header">
                    <div className="bookslist__header-name">Название книги</div>
                    <div className="bookslist__header-status">Статус</div>
                    <div onClick={handleSort} className="bookslist__header-date">
                        <img 
                        style={styleArrow}
                        src={arrow} alt="arrow" />
                        Дата
                    </div>
                </div>
                <div className="bookslist__items">
                    {renderList}
                </div>
            </div>
        </div>
    </section>
    )
}

export default BooksList