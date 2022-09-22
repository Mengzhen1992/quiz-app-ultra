import Card from "../components/card/Card";
import "./Cards.css";

export default function Cards({ cards }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          question={card.question}
          tags={card.tags}
          answer={card.answer}
          bookmarked={card.bookmarked}
        />
      ))}
    </div>
  );
}
