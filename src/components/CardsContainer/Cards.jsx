import './Cards.css';

export default function Cards({ card, name, status, texto, image }) {
  return (
    <div className={`card card--${card}`}>
      <img src={image} alt={`Image of ${name}`} className="card__image" />
      <div className="card__header">
        <p className="card__name">{name}</p>
        <p className="card__status">{status}</p>
      </div>
      <p className="card__text">"{texto}"</p>
    </div>
  );
}
