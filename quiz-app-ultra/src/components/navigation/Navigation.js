import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation({ page, setPage }) {
  return (
    <footer>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <button
              onClick={() => setPage("home")}
              className={`navbar__button ${
                page === "home" ? "navbar__button--active" : ""
              }`}
              type="button"
            >
              <FontAwesomeIcon icon="house" />
            </button>
          </li>
          <li className="navbar__list-item">
            <button
              onClick={() => setPage("bookmark")}
              className={
                "navbar__button " +
                (page === "bookmark" ? "navbar__button--active" : "")
              }
              type="button"
            >
              <FontAwesomeIcon icon="bookmark" />
            </button>
          </li>
          <li className="navbar__list-item">
            <button
              onClick={() => setPage("create")}
              className={`navbar__button ${
                page === "create" ? "navbar__button--active" : ""
              }`}
              type="button"
            >
              <FontAwesomeIcon icon="square-plus" />
            </button>
          </li>
          <li className="navbar__list-item">
            <button
              onClick={() => setPage("profile")}
              className={
                "navbar__button " +
                (page === "profile" ? "navbar__button--active" : "")
              }
              type="button"
            >
              <FontAwesomeIcon icon="user" />
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navigation;
