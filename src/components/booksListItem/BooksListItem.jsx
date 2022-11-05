import './booksListItem.scss'
import accept from '../../assets/icons/accept.png'
import read from '../../assets/icons/read.png'
import later from '../../assets/icons/later.png'
import trash from '../../assets/icons/trash.png'
import edit from '../../assets/icons/edit.png'
import { useState } from 'react'
import { bookRemove } from '../..//store/slices/booksSlice'
import { useDispatch } from 'react-redux'

function BooksListItem({title, book}) {

  const [info, setInfo] = useState(false)
  const dispatch = useDispatch()

  const {id, author, status, date} = book;

  const statusIcons = () => {
    switch (status) {
      case 'Хочу прочитать': 
        return later;
      case 'Читаю' : 
        return read;
      case 'Прочитанно' : 
        return accept;
      default: 
        return later;
    }   
  }

  const handleClick = (e) => {
    setInfo(!info)
  }

  const iconStatus = statusIcons()

  const deleteBook = (id) => {
    dispatch(bookRemove(id))
  }

  const editBook = (id) => {
    
  }


  const renderInfo = info ? <div className="bookskist__item-info">
                              <div className="bookskist__item-author">Автор: {author}</div>
                              <div className=''>
                                <img onClick={() => editBook(id)} src={edit} alt="edit" />
                                <img onClick={() => deleteBook(id)} src={trash} alt="trash" />
                              </div>
                            </div> : 
                            null

  return (
      <>
      <div onClick={handleClick} className="bookslist__item">
        <div className="bookslist__item-name">{title}</div>
        <img src={iconStatus} alt="icons" className="bookslist__item-status"/>
        <div className="bookslist__item-data">{date}</div>
      </div>
        {renderInfo}
      </>
  )
}

export default BooksListItem