import starIcon from '../../assets/images/icon-star.svg'
import './Stars.css'

export default function Stars ({star, texto}) {
  
  return(
    <div className={`star star--${star}`}>
          <div className="star__icons">
            <img src={starIcon} alt="star icon" />
            <img src={starIcon} alt="star icon" />
            <img src={starIcon} alt="star icon" />
            <img src={starIcon} alt="star icon" />
            <img src={starIcon} alt="star icon" />
          </div>
          <h4 className="star__text">{texto}</h4>
    </div>
  )
}
