import React from "react";
import css from "./Navigation.module.css";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="CSS">
      <div className="nav-wrapper">
        <a href="#name">Tesfa</a>
        <ul className="right">
          <li
            className={`${
              currentPage === "Aboutme" ? `${css.customactive}` : ""
            } ${css.customLi}`}
          >
            <a href="#aboutme" onClick={() => handlePageChange("Aboutme")}>
              Aboutme
            </a>
          </li>
          <li
            className={`${
              currentPage === "Portfolio" ? `${css.customactive}` : ""
            } ${css.customLi}`}
          >
            <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
              Portfoilio
            </a>
          </li>
          <li
            className={`${
              currentPage === "Contact" ? `${css.customactive}` : ""
            } ${css.customLi}`}
          >
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </a>
          </li>
          <li
            className={`${
              currentPage === "Resume" ? `${css.customactive}` : ""
            } ${css.customLi}`}
          >
            <a href="#resume" onClick={() => handlePageChange("Resume")}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
