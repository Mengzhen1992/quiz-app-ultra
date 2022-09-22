import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Card({ question, answer, tags, bookmarked }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="card">
      <button type="button" className="card__bookmark-icon">
        <FontAwesomeIcon icon={bookmarked ? "bookmark" : ["far", "bookmark"]} />
      </button>
      <p>{question}</p>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        type="button"
        className={"card__answer-button " + (showAnswer ? "" : "hidden")}
      >
        {showAnswer ? "Show Answer" : "Hide Answer"}
      </button>
      {!showAnswer && <p className="card__answer-text">{answer}</p>}
      <ul className="card__tag-list">
        {tags.map((tag, index) => (
          <li className="card__tag" key={tag}>
            #{tag}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Card;
