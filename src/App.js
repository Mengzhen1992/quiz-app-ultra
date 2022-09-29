import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
/* import { fab } from "@fortawesome/free-brands-svg-icons"; */
import {
  faHouse,
  faBookmark as fasBookmark,
  faSquarePlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

library.add(faHouse, fasBookmark, faSquarePlus, faUser, farBookmark);

const initialCards = [
  {
    id: 1,
    question: "What does HTML stands for?",
    answer: "Hyper Text Markup Language",
    tags: ["HTML"],
    bookmarked: true,
  },
  {
    id: 2,
    question: "Why is positioning important?",
    answer:
      "Because the normal document flow is not enough to create some userexperience designs.",
    tags: ["HTML", "CSS"],
    bookmarked: false,
  },
  {
    id: 3,
    question: "What the following code return? ",
    answer: "false",
    tags: ["JS"],
    bookmarked: true,
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [cards, setCards] = useState(initialCards);

  function appendCard(question, answer, tag) {
    const newCards = [
      ...cards,
      {
        id: Math.random(),
        question: question,
        answer: answer,
        tags: [tag],
        bookmarked: false,
      },
    ];
    setCards(newCards);
  }

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  function deleteCard(id) {
    const updatedDeleteCards = cards.filter((card) => card.id !== id);
    setCards(updatedDeleteCards);
  }

  function toggleBookmark(id) {
    const updatedToggleCard = cards.map((card) => {
      if (card.id === id) card.bookmarked = !card.bookmarked;
      return card;
    });
    setCards(updatedToggleCard);
  }

  return (
    <div className="App">
      <Header />
      <main className="app__main">
        {/* {page === "home" && (
          <Cards
            cards={cards}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        )}
        {page === "bookmark" && (
          <Cards
            cards={cards.filter((card) => card.bookmarked)}
            toggleBookmark={toggleBookmark}
          />
        )}
        {page === "create" && <Create appendCard={appendCard} />}
        {page === "profile" && <Profile />} */}
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                cards={cards}
                deleteCard={deleteCard}
                toggleBookmark={toggleBookmark}
              />
            }
          />
          <Route
            path="/bookmark"
            element={
              <Cards
                cards={cards.filter((card) => card.bookmarked)}
                toggleBookmark={toggleBookmark}
              />
            }
          />
          <Route path="/create" element={<Create appendCard={appendCard} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
