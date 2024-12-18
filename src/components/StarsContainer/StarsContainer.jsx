import Stars from "./Stars"
import './StarsContainer.css'

export default function StarsContainer () {

  return(

    <div className="stars-container">
      <Stars star='star1' texto='Rated 5 Stars in Reviews'/>
      <Stars star='star2' texto='Rated 5 Stars in Report Guru'/>
      <Stars star='star3' texto='Rated 5 Stars in BestTech'/>
    </div>
  )
}