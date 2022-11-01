import React from 'react'

import './newBookModal.scss'

function NewBookModal() {
  return (
    <div className="popup">
      <div className="popup__layout"></div>
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal__title">Добавить новую книгу в список</div>
          <form className="modal__form">
            <div className="modal__form-item">
              <input name="book" type="text" />
              <label htmlFor="book">Название книги</label>
            </div>
            <div className="modal__form-item">
              <input name="author" type="text" />
              <label htmlFor="author">Автор</label>
            </div>
            <div className="modal__form-item">
              <select name="status" id="status">
                <option value="not_read">Не прочитанно</option>
                <option value="read">Читаю</option>
                <option value="readed">Прочитанно</option>
              </select>
              <label htmlFor="status">Статус</label>
            </div>
            <div className="modal__form-item">
              <input type="date" />
              <label htmlFor="date">Дата</label>
            </div>
          </form>
        </div>
    </div>
    </div>
  )
}

export default NewBookModal