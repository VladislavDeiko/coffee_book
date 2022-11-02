import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { modalOpen } from '../../store/slices/modalSlice'
import { bookSearch } from '../../store/slices/booksSlice'

import './booksSearch.scss'
import { useEffect } from 'react'


function BooksFilter() {

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    
    useEffect(()=> {
        dispatch(bookSearch(search))
    },[search])

    return (
    <section className="booksfilter">
        <div className="container">
            <div className="booksfilter__wrapper">
                <button onClick={()=>dispatch(modalOpen())} className="btn booksfilter__btn">+ Добавить книгу</button>
                <div className="booksfilter__search">
                    <input  value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                            placeholder='Название книги' 
                            className="booksfilter__search-input"  
                            name='search' 
                            type="text"/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BooksFilter