import Cards from './Cards';
import coltonImg from '../../assets/images/image-colton.jpg';
import ireneImg from '../../assets/images/image-irene.jpg';
import anneImg from '../../assets/images/image-anne.jpg';
import './CardsContainer.css';

const cardData = [
  {
    id: 'card1',
    name: 'Colton Smith',
    status: 'Verified Buyer',
    texto: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    image: coltonImg,
  },
  {
    id: 'card2',
    name: 'Irene Roberts',
    status: 'Verified Buyer',
    texto: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    image: ireneImg,
  },
  {
    id: 'card3',
    name: 'Anne Wallace',
    status: 'Verified Buyer',
    texto: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    image: anneImg,
  },
];

export default function CardsContainer() {
  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <Cards
          key={card.id}
          card={card.id}
          name={card.name}
          status={card.status}
          texto={card.texto}
          image={card.image}
        />
      ))}
    </div>
  );
}
