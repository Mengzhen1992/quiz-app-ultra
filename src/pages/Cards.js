import Card from "../components/card/Card";
import "./Cards.css";

export default function Cards({ cards, deleteCard, toggleBookmark }) {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          id={card.id}
          question={card.question}
          tags={card.tags}
          answer={card.answer}
          bookmarked={card.bookmarked}
          deleteCard={deleteCard}
          toggleBookmark={toggleBookmark}
        />
      ))}
    </div>
  );
}
