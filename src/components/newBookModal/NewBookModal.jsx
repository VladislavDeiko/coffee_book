import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { modalAddClose } from '../../store/slices/modalSlice'
import { bookAdd } from '../../store/slices/booksSlice'
import { v4 as uuidv4 } from 'uuid'

import Close from '../../assets/icons/close.png'
import './newBookModal.scss'


function NewBookModal() {

  const {activeAddModal} = useSelector(state => state.modal)
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: {errors}, reset, clearErrors} = useForm({mode: 'onChange'})

  const onSubmit = (data) => {
    const id = uuidv4();
    const newBook = {id, ...data}

    dispatch(modalAddClose())
    dispatch(bookAdd(newBook))

    reset();
    clearErrors()
  }

  const validationError = (errorsField, type, msg) => {
    if (type) {
      return (
        <>
          {errorsField && <div role='alert' className='error-field'>{errorsField?.message}</div>}
          {errorsField && errorsField?.type === type && <div role='alert' className='error-field'>{msg}</div>}
        </>
      )
    } 
    return (
      <>
        {errorsField && <div role='alert' className='error-field'>{errorsField?.message}</div>}
      </>
      
    )
  }

  const activeModalClass = activeAddModal ? 'popup popup_active' : 'popup';

  return (
    <div className={activeModalClass}>
      <div onClick={()=>dispatch(modalAddClose())} className="popup__layout"></div>
      <div className="modal">
        <img onClick={()=>dispatch(modalAddClose())} src={Close} alt="close-modal-icon" className="modal__close" />
        <div className="modal__wrapper">
          <div className="modal__title">Добавить новую книгу в список</div>
          <form onSubmit={handleSubmit(onSubmit)} className="modal__form">
            <div className="modal__form-item">
              <input {...register("title" , {required: 'Введите название книги', minLength:2})}  
                     name="title" type="text" />
              <label htmlFor="title">Название книги</label>
              {validationError(errors.title, 'minLength', 'Минимум 2 символа')}
            </div>
            <div className="modal__form-item">
              <input {...register('author', {required: "Введите автора", minLength:2})} 
                      name="author" type="text"/>
              <label htmlFor="author">Автор</label>
              {validationError(errors.author, 'minLength', 'Минимум 2 символа')}
            </div>
            <div className="modal__form-item">
              <select  {...register('status')} name="status" id="status">
                <option value="Хочу прочитать">Хочу прочитать</option>
                <option value="Читаю">Читаю</option>
                <option value="Прочитанно">Прочитанно</option>
              </select>
              <label htmlFor="status">Статус</label>
            </div>
            <div className="modal__form-item">
              <input {...register('date', { required: "Дата не выбрана"})} 
                       type="date" />
              <label htmlFor="date">Дата</label>
              {validationError(errors.date, null, 'Минимум 2 символа')}
            </div>
            <button type='submit' className="btn btn_form">Добавить</button>
          </form>
        </div>
    </div>
    </div>
  )
}

export default NewBookModal