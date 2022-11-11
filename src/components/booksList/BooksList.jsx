import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BooksListItem from '../booksListItem/BooksListItem'
import { booksSortDate, booksFilter } from '../..//store/slices/booksSlice'

import './bookList.scss'
import arrow from '../../assets/icons/arrow.png'

function BooksList() {
    const {filterBooks} = useSelector(state => state.books);
    const dispatch = useDispatch();

    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('')

    useEffect(() => {
        dispatch(booksFilter(filter))
    },[filter])


    const handleSort = () => {
        dispatch(booksSortDate(sort))
        if (sort === "" || sort === "down") {
            setSort('up')
        } else {
            setSort('down')
        }
    }

    const onFilter = (e) => {
        setFilter(e.target.value)
        setSort('')
    }

    const renderBooks = (books) => {
        if (books.length === 0) {
            return (
                <div className="bookslist__item">
                    <div className="booksList__item-name">Пока нет книг в вашем списке</div>
                </div>
            )
        } else {
            return books.map((book) => {
                return <BooksListItem 
                key = {book.id} 
                book={book}/>
            })
        }
    }

    const styleArrow = sort === "down" ? {opacity: 1} : 
                       sort === "up" ? {opacity:1, transform: 'rotate(540deg)'} : {opacity: 0}

    const renderListBooks = renderBooks(filterBooks)

    return (
    <section className="bookslist">
        <div className="container">
            <div className="bookslist__wrapper">
                <div className="bookslist__header">
                    <div className="bookslist__header-name">Название книги</div>
                    <div className="bookslist__header-status">
                        <div>
                            <select vlaue = {filter} 
                                    onChange={onFilter}  
                                    className="btn btn_filter" name="filter" id="filter">
                                <option value="">Все</option>
                                <option value="Хочу прочитать">Хочу прочитать</option>
                                <option value="Читаю">Читаю</option>
                                <option value="Прочитанно">Прочитанно</option>
                            </select>
                        </div>
                    </div>
                    <div onClick={handleSort} className="bookslist__header-date">
                        <img 
                        className='bookslist__header-icon'
                        style={styleArrow}
                        src={arrow} alt="arrow" />
                        Дата
                    </div>
                </div>
                <div className="bookslist__items">
                    {renderListBooks}
                </div>
            </div>
        </div>

    </section>
    )
}

export default BooksList