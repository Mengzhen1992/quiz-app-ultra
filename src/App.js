import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

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

const cards = [
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
    answer: ["false"],
    tags: ["JS"],
    bookmarked: true,
  },
];

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header />
      <main className="app__main">
        {page === "home" && <Cards cards={cards} />}
        {page === "bookmark" && (
          <Cards cards={cards.filter((card) => card.bookmarked)} />
        )}
        {page === "create" && <Create />}
        {page === "profile" && <Profile />}
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
