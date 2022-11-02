import './booksListItem.scss'
import accept from '../../assets/icons/accept.png'
import read from '../../assets/icons/read.png'
import later from '../../assets/icons/later.png'

function BooksListItem({title, status, date}) {

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

  const iconStatus = statusIcons()

  return (
      <div className="bookslist__item">
        <div className="bookslist__item-name">{title}</div>
        <img src={iconStatus} alt="icons" className="bookslist__item-status"/>
        <div className="bookslist__item-data">{date}</div>
      </div>
  )
}

export default BooksListItem