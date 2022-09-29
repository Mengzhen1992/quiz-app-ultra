/* import "./Navigation.css"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation({ page, setPage }) {
  return (
    <footer>
      {/* <nav className="navbar"> */}
      <NavItem>
        {/* <ul className="navbar__list"> */}
        <NavItemList>
          {/* <li className="navbar__list-item"> */}
          <ListItem>
            {/* <button
              onClick={() => setPage("home")}
              className={`navbar__button ${
                page === "home" ? "navbar__button--active" : ""
              }`}
              type="button"
            >
              <FontAwesomeIcon icon="house" />
            </button> */}
            <LinkButton
              to="/"
              className={`navbar__button ${
                page === "home" ? "navbar__button--active" : ""
              }`}
              type="button"
              end
            >
              <FontAwesomeIcon icon="house" />
            </LinkButton>
            {/* </li> */}
          </ListItem>
          {/* <li className="navbar__list-item"> */}
          <ListItem>
            {/* <button
              onClick={() => setPage("bookmark")}
              className={
                "navbar__button " +
                (page === "bookmark" ? "navbar__button--active" : "")
              }
              type="button"
            >
              <FontAwesomeIcon icon="bookmark" />
            </button> */}
            <LinkButton
              to="/bookmark"
              className={
                "navbar__button " +
                (page === "bookmark" ? "navbar__button--active" : "")
              }
              type="button"
            >
              <FontAwesomeIcon icon="bookmark" />
            </LinkButton>
            {/* </li> */}
          </ListItem>
          {/* <li className="navbar__list-item"> */}
          <ListItem>
            {/* <button
              onClick={() => setPage("create")}
              className={`navbar__button ${
                page === "create" ? "navbar__button--active" : ""
              }`}
              type="button"
            >
              <FontAwesomeIcon icon="square-plus" />
            </button> */}
            <LinkButton
              to="/create"
              className={`navbar__button ${
                page === "create" ? "navbar__button--active" : ""
              }`}
              type="button"
            >
              <FontAwesomeIcon icon="square-plus" />
            </LinkButton>
            {/* </li> */}
          </ListItem>
          {/* <li className="navbar__list-item"> */}
          <ListItem>
            {/* <button
              onClick={() => setPage("profile")}
              className={
                "navbar__button " +
                (page === "profile" ? "navbar__button--active" : "")
              }
              type="button"
            >
              <FontAwesomeIcon icon="user" />
            </button> */}
            <LinkButton
              to="/profile"
              /* className={
                "navbar__button " +
                (page === "profile" ? "navbar__button--active" : "")
              }
              type="button" */
            >
              <FontAwesomeIcon icon="user" />
            </LinkButton>
            {/* </li> */}
          </ListItem>
          {/* </ul> */}
        </NavItemList>
        {/* </nav> */}
      </NavItem>
    </footer>
  );
}

const NavItem = styled.nav`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--secondary-color);
`;

const NavItemList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LinkButton = styled(NavLink)`
  background: transparent;
  border: none;
  font-size: 3em;
  border: 1px solid;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  color: var(--navbar__icon-color);
  &.active {
    background-color: var(--navbar__button-light);
  }
  &:hover {
    color: var(--navbar__icon-color--hover);
  }
`;

export default Navigation;
