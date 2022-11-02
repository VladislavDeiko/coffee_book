import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalClose } from '../../store/slices/modalSlice'
import { bookAdd } from '../../store/slices/booksSlice'

import Close from '../../assets/icons/close.png'
import './newBookModal.scss'
import { useState } from 'react'

function NewBookModal() {

  const {activeModal} = useSelector(state => state.modal)
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState("Хочу прочитать")
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      status,
      date
    }

    dispatch(bookAdd(newBook))
    dispatch(modalClose())

    setTitle('')
    setAuthor('')
    setStatus("Хочу прочитать")
    setDate('')

  }

  const activeModalClass = activeModal ? 'popup popup_active' : 'popup';

  return (
    <div className={activeModalClass}>
      <div onClick={()=>dispatch(modalClose())} className="popup__layout"></div>
      <div className="modal">
        <img onClick={()=>dispatch(modalClose())} src={Close} alt="close-modal-icon" className="modal__close" />
        <div className="modal__wrapper">
          <div className="modal__title">Добавить новую книгу в список</div>
          <form onSubmit={handleSubmit} className="modal__form">
            <div className="modal__form-item">
              <input value={title} onChange={(e)=> setTitle(e.target.value)} name="book" type="text" />
              <label htmlFor="book">Название книги</label>
            </div>
            <div className="modal__form-item">
              <input value={author} onChange={(e)=> setAuthor(e.target.value)} name="author" type="text" />
              <label htmlFor="author">Автор</label>
            </div>
            <div className="modal__form-item">
              <select value={status} onChange={(e)=> setStatus(e.target.value)} name="status" id="status">
                <option value="Хочу прочитать">Хочу прочитать</option>
                <option value="Читаю">Читаю</option>
                <option value="Прочитанно">Прочитанно</option>
              </select>
              <label htmlFor="status">Статус</label>
            </div>
            <div className="modal__form-item">
              <input value={date} onChange={(e)=> setDate(e.target.value)} className="modal__form-data" type="date" />
              <label htmlFor="date">Дата</label>
            </div>
            <button type='submit' className="btn btn_form">Добавить</button>
          </form>
        </div>
    </div>
    </div>
  )
}

export default NewBookModal